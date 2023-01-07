const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:8081/'
    },
    devServer: {
        static: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' }
            ]
        })
    ]
};