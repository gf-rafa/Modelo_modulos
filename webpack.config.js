const path = require("path")

module.exports = {
    entry:{
        index: './src/index.js'
    },
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules: [
            {
              test: /\\.js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
              }
            }
          ]
    },

    devServer: {
        static: path.resolve(__dirname, "dist"),
        liveReload: true
    }
}