import { defineConfig } from 'vite';

// Base path comes from the workflow: '/olea-careers/' while serving from
// augdog214.github.io, '/' once careers.myoleagroup.com DNS is live.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
});
