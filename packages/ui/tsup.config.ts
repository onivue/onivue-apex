import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  dts: true,
  minify: true,
  clean: true,
  entry: ["src/**/index.tsx"],
  format: ["esm", "cjs"],
  external: ["react"],
  ...options,
}));
