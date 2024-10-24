import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";

export default tseslint.config(
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ["**/*.{spec,config,test}.{js,jsx,ts,tsx}", "**/node_modules"],
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  {
    plugins: {
      "react-refresh": pluginReactRefresh,
      "react-hooks": reactHooks,
    },
    rules: {
      "react-refresh/only-export-components": "warn",
      ...reactHooks.configs.recommended.rules,
    },
  },
  jsxA11y.configs.recommended,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier
);
