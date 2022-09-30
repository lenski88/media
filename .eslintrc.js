module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "prettier",
    "plugin:prettier/recommended",
    "eslint-config-prettier",
  ],
  plugins: ["import", "prettier", "eslint-plugin-prettier"],
  parserOptions: {
    ecmaVersion: 8,
  },
  globals: {
    var1: "writable",
    var2: "readonly",
  },
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "warn",
  },
};
