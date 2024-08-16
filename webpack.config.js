const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/CRM-Dashboard-Customers/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(node|binary)$/,
        use: "file-loader",
      },
      {
        test: /\.pug$/,
        use: {
          loader: "pug-loader",
          options: {
            pretty: true,
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.sass$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.d\.ts$/,
        use: "ignore-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".pug", ".css", ".sass"],
    fallback: {
      fs: false,
      path: require.resolve("path-browserify"),
      url: require.resolve("url"),
      os: require.resolve("os-browserify/browser"),
      querystring: require.resolve("querystring-es3"),
      zlib: require.resolve("browserify-zlib"),
      vm: require.resolve("vm-browserify"),
      stream: require.resolve("stream-browserify"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      crypto: require.resolve("crypto-browserify"),
      worker_threads: false,
      child_process: false,
      assert: require.resolve("assert/"),
      constants: require.resolve("constants-browserify"),
      module: false,
      tty: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.pug",
      filename: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets"),
          to: path.resolve(__dirname, "dist/assets"),
        },
      ],
    }),
  ],
  devtool: "source-map",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
};
