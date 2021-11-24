const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve('./src/${env.src}/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[hash][ext]'
    },
    module: {
        rules: [{
            test: /\.js$/i,                                                     // 대상(js 파일), 순서 중요
            exclude: /node_modules/,                                            // 제외할 것들
            use: ['babel-loader']                                               // 사용하는 module
        }, {
            test: /\.(sa|sc|c)ss$/i,                                            // 대상(sass, scss, css), 순서 중요
            use: ['style-loader', 'css-loader', 'sass-loader']                  // 사용하는 module
        }, {
            test: /\.(png|gif|jpe?g|svg|ico|tiff|bmp)$/i,
            type: 'asset/resource'
        }]
    },
    devtool: "eval-source-map",
    devServer: {
        host: '0.0.0.0',
        port: 9999,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }
}