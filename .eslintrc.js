module.exports = {
  parser: "babel-eslint",
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:jest/recommended'],
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      jest: true,
      es6: true
    }
  }
};
