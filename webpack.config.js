module.exports = (config, env) => {
  // prepend full path in dev environment
  if (env === 'development') {
    const port = process.env.PORT || 3000;
    config.output.publicPath = `http://localhost:${port}/`;
  }
  return config;
};
