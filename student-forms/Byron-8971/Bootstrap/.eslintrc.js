const RULES = {
  OFF: "off",
  WARN: "warn",
  ERROR: "error",
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
/*
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "standard",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
}
*/
