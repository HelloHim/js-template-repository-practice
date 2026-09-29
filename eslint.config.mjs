import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

// Must go last, so it can properly turn off all previous,
// potentially conflicting, configs:
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {},
  },
  eslintConfigPrettier,
]);
