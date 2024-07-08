import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import {fixupConfigRules} from "@eslint/compat";
import i18nextPlugin from "eslint-plugin-i18next";

export default [
    {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
    {languageOptions: {parserOptions: {ecmaFeatures: {jsx: true}}}},
    {languageOptions: {globals: globals.browser}},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
    {
        plugins: {
            i18next: i18nextPlugin
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "i18next/no-literal-string": 2
        }
    }

];