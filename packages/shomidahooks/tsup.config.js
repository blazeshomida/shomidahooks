import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  outDir: "dist",
  dts: true,
  target: "es6",
  treeshake: true,
  splitting: true,
  minify: true,
  sourcemap: true,
  bundle: true,
  clean: true,
  external: ["react"],
  tsconfig: "./tsconfig.json", // This should point to your tsconfig.json file
});
