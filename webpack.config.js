// Generated using webpack-cli http://github.com/webpack-cli
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require("./package.json").dependencies;
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
        hot: true,
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,  // join jsx here
                use:{ 
                    loader: 'babel-loader',
                    options:{  //Use babel-loader to need es6->es5
                        presets:[
                            '@babel/preset-env',
                            '@babel/preset-react'  //yarn add @babel/core @babel/preset-react -D
                        ],
                        plugins:[
                            '@babel/plugin-proposal-class-properties',// '@babel/plugin-syntax-dynamic-import'
                        ]
                    }
                },
                exclude:/node_module/,
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
                type: 'asset',
            },
        ],
    },
    plugins: [
        // new ModuleFederationPlugin({
        //     name: 'App',
        //     filename: 'remoteEntry.js',
        //     remotes: {

        //     },
        //     exposes: {
                
        //     },
        //     shared: {
        //         ...deps,
        //         react: {
        //             singleton: true,
        //             requiredVersion: deps.react,
        //         },
        //         'react-dom': {
        //             singleton: true,
        //             requiredVersion: deps["react-dom"],
        //         }
        //     }
        // }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};
