import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import macrosPlugin from "vite-plugin-babel-macros";

export default defineConfig({
  plugins: [macrosPlugin(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    "process.env": {},
  },
});
