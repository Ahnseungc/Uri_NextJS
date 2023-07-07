const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    proxy.createProxyMiddleware({
      target: '',
      changeOrigin: true,
      pathRewrite: {
        '^/api': 'https://api.openai.com/v1/completions',
      },
    }),
  );
};
