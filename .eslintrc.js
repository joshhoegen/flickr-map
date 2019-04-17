module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    "plugin:vue/recommended"
  ],
  parserOptions: {
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {
    semi: ["error", "never"],
    "arrow-parens": ["error", "as-needed"],
    "no-param-reassign": ["error", { props: false }],
    "no-underscore-dangle": [
      "error",
      { allow: ["id_", "options_", "cache_", "el_", "player_"] }
    ],
    indent: "off",
    "no-unused-vars": ["error", { varsIgnorePattern: "dom" }],
    "semi-style": "off",
    "comma-dangle": "off",
    "object-curly-newline": "off",
    "newline-after-var": ["error", "always"],
    quotes: [2, "single", { avoidEscape: true }]
  }
};
