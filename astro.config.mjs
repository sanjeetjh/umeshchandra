// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig(({ command }) => ({
  site: 'https://sanjeetjh.github.io',
  base: command === 'build' ? '/umeshchandra' : '/',
  // Other Astro config options...
}));