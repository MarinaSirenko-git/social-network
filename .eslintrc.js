module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-underscore-dangle': 0,
    'no-debugger': 0,
    'react/jsx-props-no-spreading': 'off',
    'linebreak-style': 0,
    'no-console': 0,
    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
  },
};
