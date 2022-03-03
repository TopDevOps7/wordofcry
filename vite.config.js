import { defineConfig } from "vite";
import { createVuePlugin as vue } from "vite-plugin-vue2";
const path = require("path");

console.log('path.resolve(__dirname, "./src"):', path.resolve(__dirname, "./src"))

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    "process.env": {},
  },
});
