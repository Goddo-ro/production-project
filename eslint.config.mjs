import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from "eslint-plugin-i18next";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      "react": {
        "version": "detect"
      }
    },
  },
  {
    plugins: {
      "i18next": i18next
    }
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/no-deprecated": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "i18next/no-literal-string": 2
    }
  },
];