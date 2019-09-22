module.exports = function(api) {
  api.cache(true);

  const presets = [
    "es2015",
    "@babel/preset-env",
    "@babel/preset-react"
  ];

  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread"
  ];

  return {
    presets,
    plugins
  };
};