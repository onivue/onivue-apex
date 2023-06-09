const { resolve } = require("node:path");

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "plugin:storybook/recommended",
    "plugin:storybook/csf-strict",
    "next/core-web-vitals",
    "turbo",
    "prettier",
  ],
  plugins: ["testing-library"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/method-signature-style": "error",
    // "@typescript-eslint/naming-convention": [
    //   "error",
    //   {
    //     selector: ["interface", "typeAlias"],
    //     format: ["PascalCase"],
    //     custom: {
    //       regex: "^[I,T][A-Z]",
    //       match: false,
    //     },
    //   },
    // ],
    "@typescript-eslint/no-confusing-void-expression": 0,
    "@typescript-eslint/no-duplicate-type-constituents": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-redundant-type-constituents": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
  },
  overrides: [
    {
      files: ["**/*.{spec,test}.{ts,tsx}"],
      extends: ["plugin:testing-library/react", "plugin:jest-dom/recommended"],
    },
  ],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
    project: ["./apps/*/tsconfig.json", "./packages/*/tsconfig.json"],
    tsconfigRootDir: resolve(__dirname, "../.."),
  },
};
