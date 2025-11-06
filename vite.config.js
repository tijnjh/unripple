import { ripple } from "@ripple-ts/vite-plugin";
import { defineConfig } from "vite";

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
    },
  },
}));
