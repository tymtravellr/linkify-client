import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
//import react from "@vitejs/plugin-react-swc"; *for swc install
const __dirname = path.dirname("./src/");

export default defineConfig({
  plugins: [react()],
  resolve: {
      alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});