import { defineConfig, loadEnv } from "vite"
import path from "path"

export default {
  root: path.resolve(__dirname, "src"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/index.html"),
        about: path.resolve(__dirname, "src/about.html"),
      },
    },
  },
}
