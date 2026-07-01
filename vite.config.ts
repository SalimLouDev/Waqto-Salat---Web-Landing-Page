import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

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
        input: {
          main: path.resolve(__dirname, 'index.html'),
          privacyPolicy: path.resolve(__dirname, 'privacy-policy/index.html'),
          termsOfService: path.resolve(__dirname, 'terms-of-service/index.html'),
          adFreePrayerTimesApp: path.resolve(__dirname, 'ad-free-prayer-times-app/index.html'),
          salahReminderApp: path.resolve(__dirname, 'salah-reminder-app/index.html'),
          qiblaCompassApp: path.resolve(__dirname, 'qibla-compass-app/index.html'),
          prayerTimesWidgetAndroid: path.resolve(__dirname, 'prayer-times-widget-android/index.html'),
          prayerTimesCalculation: path.resolve(__dirname, 'how-prayer-times-are-calculated/index.html'),
          learn: path.resolve(__dirname, 'learn/index.html'),
          istikharaPrayer: path.resolve(__dirname, 'learn/istikhara-prayer/index.html'),
          eidPrayer: path.resolve(__dirname, 'learn/eid-al-fitr-and-eid-al-adha-prayer/index.html'),
          janazahPrayer: path.resolve(__dirname, 'learn/janazah-prayer/index.html'),
          eclipsePrayer: path.resolve(__dirname, 'learn/eclipse-prayer/index.html'),
          taraweehPrayer: path.resolve(__dirname, 'learn/taraweeh-prayer/index.html'),
        },
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
