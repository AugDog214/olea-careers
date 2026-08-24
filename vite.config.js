import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

// Base path comes from the workflow: '/olea-careers/' while serving from
// augdog214.github.io, '/' once careers.myoleagroup.com DNS is live.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        capeCoral: fileURLToPath(new URL('./join-real-estate-brokerage-cape-coral/index.html', import.meta.url)),
        fortMyers: fileURLToPath(new URL('./100-percent-commission-real-estate-broker-fort-myers/index.html', import.meta.url)),
        bilingual: fileURLToPath(new URL('./bilingual-real-estate-brokerage-careers-swfl/index.html', import.meta.url)),
      },
    },
  },
});
