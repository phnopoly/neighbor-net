import { ESLint } from "eslint";

const config: ESLint.ConfigData = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    ],
    plugins: ["@typescript-eslint", "react", "react-hooks"],
    rules: {
        "react/react-in-jsx-scope": "off", // Next.js does not require React to be in scope
        "react/prop-types": "off", // If using TypeScript, no need for prop types
        "@typescript-eslint/no-unused-vars": ["warn"],
        "@typescript-eslint/explicit-module-boundary-types": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    ignorePatterns: ["node_modules/*", ".next/*", ".turbo/*", "dist/*", "*.log", "*.env", "*.env.local"],
};

export default config;
