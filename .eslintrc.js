module.exports = {
  // parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  extends: ['airbnb', 'prettier'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    // 'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/no-unsafe': 'error',
    'prettier/prettier': ['error'],
  },
  env: {
    es6: true,
    jest: true,
    browser: true,
    node: true,
  },
};
