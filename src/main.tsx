import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {initLanguageSuggestion} from './language-suggestion';

const rootElement = document.getElementById('root')!;
const locale = document.documentElement.lang === 'ar' ? 'ar' : 'en';
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
