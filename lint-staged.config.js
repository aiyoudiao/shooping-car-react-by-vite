module.exports = {
  '*.{css, less, scss}': 'stylelint --fix',
  '*.{ts,tsx}': () => 'tsc --noEmit',
  '*.{ts,tsx }': 'eslint --fix',
  '*.{ts,tsx,md,html,css}': 'prettier --write',
};
