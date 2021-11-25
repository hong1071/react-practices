const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve('./src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    devServer: {
        //contentBase: path.resolve('public'),                // 감시하는 디렉토리
        host: '0.0.0.0',
        port: 9999,
        //inline: true,
        liveReload: true,
        hot: false,
        compress: true
    }
}