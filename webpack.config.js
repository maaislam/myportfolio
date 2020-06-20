var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        main: './src/scripts/index.js'
        },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    
    module: {
        rules: [
            
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader?url=false',   
                {
                    loader: 'postcss-loader',
                    options: {
                      plugins: () => [autoprefixer()]
                    }
                },
                ]
                
            },
            {
                test: /\.scss$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader?url=false',  
                {
                    loader: 'postcss-loader',
                    options: {
                      plugins: () => [autoprefixer()]
                    }
                },  'sass-loader'
                ]
                
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    
                    options: {
                        presets: [ '@babel/env' ]
                    }
                }
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'styles.css'
        }),
        new CleanWebpackPlugin(),
        new TerserPlugin({
            extractComments: false,
        }),
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new HtmlWebpackPlugin({
            
            filename:'./projects/project1.html',
            template:'./src/projects/project1.html',
            chunks:['main']
        }),
        new HtmlWebpackPlugin({
            
            filename:'./projects/project2.html',
            template:'./src/projects/project2.html',
            chunks:['main']
        }),
        new HtmlWebpackPlugin({
            
            filename:'./projects/project3.html',
            template:'./src/projects/project3.html',
            chunks:['main']
        }),
        new HtmlWebpackPlugin({
            
            filename:'./projects/project4.html',
            template:'./src/projects/project4.html',
            chunks:['main']
        }),
        new HtmlWebpackPlugin({
            
            filename:'./projects/project5.html',
            template:'./src/projects/project5.html',
            chunks:['main']
        }),
        new HtmlWebpackPlugin({
            
            filename:'./projects/project6.html',
            template:'./src/projects/project6.html',
            chunks:['main']
        }),
        new HtmlWebpackPlugin({
            
            filename:'./projects/messagesent.html',
            template:'./src/projects/messagesent.html',
            chunks:['main']
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from:'src/images',to:'images'
                } 
            ] 
        }),
    ]
  
};