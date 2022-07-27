const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/live2d/index.js',
    output: {
        path: path.resolve(__dirname, 'public/live2d'),
        filename: 'index.js',
    },
    plugins: [
        new CopyPlugin({
          patterns: [
            { from: "./src/live2d/models", to: "models" },
            { from: "./src/assets", to: "../assets" },
            { from: "./src/live2d/index.html", to: "index.html" },
            { from: "./src/live2d/style.css", to: "style.css" }
          ],
        }),
      ]
};