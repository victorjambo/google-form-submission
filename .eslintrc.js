module.exports = {
  extends: ['airbnb', 'eslint:recommended'],
  rules: {
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    'object-curly-newline': ['error', { ImportDeclaration: 'never' }],
    'arrow-parens': ['error', 'as-needed'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'arrow-body-style': [2, 'as-needed'],
    'no-restricted-globals': ['off', 'history'],
    'no-shadow': 'off',
  },
  globals: {
    document: false
  },
  env: {
    browser: true,
    node: true
  }
};
