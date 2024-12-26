import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import fs from "fs";

export default defineConfig({
  build: {
    outDir: "dist",
  },
  base: "/portfolio/",
  plugins: [
    react(),
    {
      name: "add-nojekyll",
      closeBundle() {
        const nojekyllPath = resolve(__dirname, "dist", ".nojekyll");
        fs.writeFileSync(nojekyllPath, "");
      },
    },
  ],
  optimizeDeps: {
    exclude: ["lucide-react"], // 必要に応じてモジュールを除外
  },
});
