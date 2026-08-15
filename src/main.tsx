import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {initLanguageSuggestion} from './language-suggestion';

const rootElement = document.getElementById('root')!;
const documentLanguage = document.documentElement.lang.toLowerCase();
const locale = documentLanguage.startsWith('ar')
  ? 'ar'
  : documentLanguage.startsWith('fr')
    ? 'fr'
    : 'en';
const app = (
  <StrictMode>
    <App locale={locale} />
  </StrictMode>
);

initLanguageSuggestion();

if (rootElement.dataset.ssr === 'true') {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
