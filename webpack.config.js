const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = {
    mode: "development",            // 모드 production(default), development, none
    entry: "./src/index.tsx",
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.m?[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                        plugins: ['@babel/plugin-transform-runtime', 'relay']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            crypto: false,
            module: false,
            path: false,
            util: false,
            fs: false,
            os: false
        }
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: './dist',
        port: 9000,
        proxy: {
            '/api/': {
                target: 'http://localhost:9999',
                changeOrigin: true
            },
            '/graphql/': {
                target: 'http://localhost:9999',
                changeOrigin: true
            }
        },
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}

module.exports = webpackConfig
