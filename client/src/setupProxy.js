const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/products",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
      secure: false,
    })
  );
  app.use(
    "/customers",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
      secure: false,
    })
  );
  app.use(
    "/orders",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
      secure: false,
    })
  );
  app.use(
    "/categories",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
      secure: false,
    })
  );
};
