const CracoLessPlugin = require("craco-less");
const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
    },
  },
  devServer: {
    port: 7890,
    proxy: {
      "/api": {
        // target: 'https://placeholder.com/',
        // changeOrigin: true,
        // secure: false,
        // xfwd: false,
        // target: "http://121.4.240.172:7890",
        target: "http://localhost:3001",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "rgb(0, 82, 204)",
              "@font-size-base": "16px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
