import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For https://shubhg1498.github.io/ use base: "/"
// For project pages (e.g. /repo-name/) set base: "/repo-name/"
export default defineConfig({
  base: "/",
  plugins: [react()],
});
