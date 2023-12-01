// eslint-disable-next-line no-undef
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'keyword-spacing': 'error',
    'no-trailing-spaces': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  },
};
