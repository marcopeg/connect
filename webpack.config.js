var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'sourcemaps',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './app/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js'],
        modulesDirectories: [
            'node_modules',
            path.join(__dirname, 'app'),
        ]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    'react-hot', 
                    'babel?' + [
                        'optional[]=es7.classProperties',
                        'optional[]=es7.decorators'
                    ].join('&')
                ],
                exclude: /node_modules/,
                include: __dirname
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.eot$/, loader: "file-loader" },
            { test: /\.woff2$/, loader: "file-loader" },
            { test: /\.woff$/, loader: "file-loader" },
            { test: /\.ttf$/, loader: "file-loader" },
            { test: /\.svg$/, loader: "file-loader" },
        ]
    }
};
