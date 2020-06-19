module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "no-unused-vars": [2, { argsIgnorePattern: "res|next|^err" }],
  },
};
