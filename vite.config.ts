/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    host: "localhost",
    port: 3009,
  },
  // test: {
  //   coverage: {
  //     provider: "v8",
  //   },
  //   globals: true,
  //   environment: "jsdom",
  //   setupFiles: ["./src/test/setup.ts"],
  //   css: true,
  // },
});
