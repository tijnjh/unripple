import pkg from "./package.json" with { type: "json" };
import { ripple } from "@ripple-ts/vite-plugin";
import { defineConfig } from "vite";

const banner = `/**
* ${pkg.name} v${pkg.version}
* tijn.dev
* @license ${pkg.license}
**/`;

export default defineConfig(() => ({
  plugins: [ripple()],
  build: {
    target: "esnext",
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["ripple", /^ripple\//],
      output: { banner },
    },
  },
}));
