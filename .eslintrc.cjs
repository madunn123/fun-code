module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'linebreak-style': 'off',
    'max-len': 'off',
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': ['error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      }],

    // configuration absolute important eslint airbnb
    'import/no-unresolved': [
      'error',
      {
        ignore: ['^@/'],
      },
    ],

    'import/extensions': [
      'error',
      'never',
      {
        json: 'always',
        js: 'never',
        jsx: 'never',
      },
    ],
  },
};
