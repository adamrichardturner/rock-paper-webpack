const path = require('path');

module.exports = {
    entry: './code/main.js',
    output: {
        filename: 'main_built.js',
        path: path.resolve(__dirname, 'public'),
    },
    mode: 'development',
    module: 
    {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    }
}