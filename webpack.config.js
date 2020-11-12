const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./docs/"),
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].development.css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          context: "./src/img",
          from: path.resolve(__dirname, "./src/img/"),
          to: path.resolve(__dirname, "docs/img/"),
          force: true,
          flatten: true,
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          context: "./src/",
          from: "./*.html",
          to: "./",
          force: true,
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          context: "./src/components",
          from: "./*.html",
          to: "./components",
          force: true,
        },
      ],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "docs"),
    watchContentBase: true,
    index: "index.html",
    open: true,
    lazy: true,
    overlay: true,
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              targets: {
                browsers: [
                  "edge >= 16",
                  "safari >= 9",
                  "firefox >= 57",
                  "ie >= 11",
                  "ios >= 9",
                  "chrome >= 49",
                ],
              },
            },
          },
        ],
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "src/js")],
      },
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,

          {
            loader: "css-loader",
            options: { url: false, sourceMap: true },
          },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: [path.resolve(__dirname, "./node_modules")],
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            context: path.resolve(__dirname, "src/img/"),
            outputPath: "docs/",
          },
        },
      },
    ],
  },
};