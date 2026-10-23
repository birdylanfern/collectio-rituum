import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

// base './' makes every asset path relative, so the build works on GitHub Pages
// whether it is served at user.github.io/ or user.github.io/repo-name/.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
});
