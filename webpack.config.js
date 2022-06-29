const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'], // pode ler arquivos js ou jsx
    },
    module: {
        rules: [
            {
                test: /\.jsx$/, // verifica se o arquivo termina com .jsx
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    }
}