import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@ui": path.resolve(__dirname, "./src/ui"),
    },
  },
  plugins: [react(), TanStackRouterVite()],
});
