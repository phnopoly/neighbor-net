import type { Linter } from "eslint";

const config: Linter.Config = {
    // @ts-ignore
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "prettier"] as any,
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
        "plugin:prettier/recommended",
    ],
    rules: {
        "prettier/prettier": "error",
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/explicit-module-boundary-types": "off",
    },
};

export default config;
