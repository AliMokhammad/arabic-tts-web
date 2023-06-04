const { createProxyMiddleware } = require('http-proxy-middleware')


module.exports = function (app) {
  console.log(app);
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://0.0.0.0:7575/',
      changeOrigin: false,
    })
  )
}
