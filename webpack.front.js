const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.js',
    },
    plugins: [
        new CopyPlugin({
          patterns: [
            { from: "./src/index.html", to: "index.html" },
            { from: "./src/style.css", to: "style.css" }
          ],
        }),
      ]
};