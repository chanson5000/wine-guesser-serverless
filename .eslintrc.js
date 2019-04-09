module.exports = {
  parser: "babel-eslint",
  plugins: ['react', 'prettier'],
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
  },
  settings: {
    react: {
      version: '16.5.2'
    }
  }
};
