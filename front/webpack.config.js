const DotEnv = require('dotenv-webpack');
const path = require('path');

module.exports = {
    entry: ['./index.js'],
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        port: 8081,
    },
    plugins: [
        new DotEnv({
            path: './.env',
            allowEmptyValues: true,
            systemvars: true,
        })
    ]
};