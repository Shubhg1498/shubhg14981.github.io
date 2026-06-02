import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** Default base matches the current GitHub repo name (project Pages URL). */
const REPO_NAME = "shubhg14981.github.io";

export default defineConfig({
  base: `/${REPO_NAME}/`,
  plugins: [react()],
});
