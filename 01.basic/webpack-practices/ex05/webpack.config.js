const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve('./src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/i,                                            // 대상(sass, scss, css), 순서 중요
            use: ['style-loader', 'css-loader', 'sass-loader']                  // 사용하는 module
        }]
    },
    devServer: {
        //contentBase: path.resolve('public'),                                  // 감시하는 디렉토리
        host: '0.0.0.0',
        port: 9999,
        //inline: true,
        liveReload: true,
        hot: false,
        compress: true
    }
}