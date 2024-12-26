import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
  },
  base: "portfolio",
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
