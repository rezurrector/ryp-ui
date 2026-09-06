export default {
  '*.{ts,tsx,js,jsx}': [
    'eslint --fix',
    'prettier --write',
  ],
  '*.{json,md,css,yml,yaml}': ['prettier --write'],
  '*.{ts,tsx}': ['eslint --fix'],
};