module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-case': [2, 'always', 'lower-case'],
    'header-pattern': [2, 'always', /^(\w+\/\w+):\s.+$/],
  },
};
