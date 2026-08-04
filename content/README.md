# Localized Learn Content

The Learn library is generated as static HTML so every language shares one page shell, SEO implementation, and sitemap workflow. GitHub Pages still receives ordinary HTML files; no server is required.

## Edit an existing guide

Each guide has two source files under `content/learn/<locale>/`:

- `<slug>.json` contains metadata, hero copy, table-of-contents labels, structured data, and sitemap settings.
- `<slug>.article.html` contains the article sections and their visual markup.

After editing either file, run:

```powershell
npm run generate
npm run build
```

Do not edit the generated `learn/**/index.html` files directly. The next generation run will replace those edits.

## Add a language

1. Add its interface labels and URL prefix to `content/locales.json`.
2. Create `content/learn/<locale>/index.json` and its `index.main.html` collection content.
3. Add translated guide JSON and article files. Keep the same `key` and `routePath` as the English counterpart.
4. Run `npm run generate`.

Matching page keys automatically produce reciprocal `hreflang` tags and language links. The generator also creates localized canonical URLs, JSON-LD URLs, and sitemap alternate entries.

Use `npm run generate:check` in reviews or CI to confirm that checked-in HTML agrees with its content sources.
