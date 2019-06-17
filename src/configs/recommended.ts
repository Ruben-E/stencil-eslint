export default {
  overrides: [{
    parser: "@typescript-eslint/parser",
    files: ['*.ts', '*.tsx'],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      ecmaFeatures: {
        "jsx": true
      }
    },
    rules: {
      "@stencil/reserved-member-names": "error",
      "@stencil/single-export": "error",
      "@stencil/async-methods": "error",
      "@stencil/props-must-be-public": "error",
      "@stencil/methods-must-be-public": "error"
    },
    plugins: [
      "@stencil"
    ]
  }]
};