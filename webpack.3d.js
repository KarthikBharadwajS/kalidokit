const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/3d/index.js',
    output: {
        path: path.resolve(__dirname, 'public/3d'),
        filename: 'index.js',
    },
    plugins: [
        new CopyPlugin({
          patterns: [
            { from: "./src/3d/models", to: "models" },
            { from: "./src/3d/index.html", to: "index.html" },
            { from: "./src/3d/style.css", to: "style.css" }
          ],
        }),
      ]
};