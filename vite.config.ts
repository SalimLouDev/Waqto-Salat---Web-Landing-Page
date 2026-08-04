import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'path';
import { defineConfig } from 'vite';

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

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss()],
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
