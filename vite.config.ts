import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'path';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { defineConfig, type Plugin } from 'vite';
import App from './src/App';

const ignoredDirectories = new Set([
  '.agents',
  '.codex',
  '.git',
  'assets',
  'content',
  'dist',
  'node_modules',
  'public',
  'scripts',
  'src',
]);

function findPageInputs(root: string) {
  const inputs: Record<string, string> = {};

  function visit(directory: string) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (!ignoredDirectories.has(entry.name) && !entry.name.startsWith('.')) {
          visit(path.join(directory, entry.name));
        }
        continue;
      }

      if (entry.name !== 'index.html') continue;
      const file = path.join(directory, entry.name);
      const relativeDirectory = path.relative(root, directory);
      const key = relativeDirectory
        ? relativeDirectory.replaceAll(path.sep, '-').replaceAll(/[^a-zA-Z0-9-]/g, '-')
        : 'main';
      inputs[key] = file;
    }
  }

  visit(root);
  return inputs;
}

function renderLandingPage(root: string): Plugin {
  const entryFile = path.resolve(root, 'index.html');

  return {
    name: 'render-landing-page',
    apply: 'build',
    transformIndexHtml(html, context) {
      if (!context.filename || path.resolve(context.filename) !== entryFile) return html;

      const appMarkup = renderToString(createElement(App, { locale: 'en' }));
      return html.replace(
        /<!-- app-root-start -->[\s\S]*?<!-- app-root-end -->/,
        `<!-- app-root-start --><div id="root" data-ssr="true">${appMarkup}</div><!-- app-root-end -->`,
      );
    },
  };
}

function inlineProductionCss(): Plugin {
  return {
    name: 'inline-production-css',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const stylesheets = Object.values(bundle).flatMap((entry) => {
        if (entry.type !== 'asset' || !entry.fileName.endsWith('.css')) return [];
        return [{ fileName: entry.fileName, source: entry.source.toString() }];
      });

      for (const entry of Object.values(bundle)) {
        if (entry.type !== 'asset' || !entry.fileName.endsWith('.html')) continue;

        const inlineStyles: string[] = [];
        const html = entry.source.toString().replace(/<link\b[^>]*>/gi, (tag) => {
          if (!/\brel=["']stylesheet["']/i.test(tag)) return tag;

          const href = tag.match(/\bhref=["']([^"']+\.css)["']/i)?.[1];
          if (!href) return tag;

          const stylesheet = stylesheets.find(({ fileName }) =>
            href.endsWith(fileName) || href.endsWith(path.posix.basename(fileName)),
          );
          if (!stylesheet) return tag;

          inlineStyles.push(`<style data-inline-css>${stylesheet.source}</style>`);
          return '';
        });

        entry.source = inlineStyles.length > 0
          ? html.replace('</head>', `${inlineStyles.join('')}\n  </head>`)
          : html;
      }
    },
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss(), renderLandingPage(__dirname), inlineProductionCss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: findPageInputs(__dirname),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
