const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.scss$/,
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader" },
                  { loader: "postcss-loader" },
                  { loader: "sass-loader" }
                ]
            }
        ]
    }
}