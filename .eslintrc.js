const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  modules: {
    auto: true,
    react: true,
    esm: true,
  },
  rules: {
    'react/no-unused-prop-types': 'warn',
    'react/sort-default-props': 'warn',
    'react/no-object-type-as-default-prop': 'off',
    'import/no-named-as-default': 'off',
  },
});
