const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base')

module.exports = Object.assign(baseConfig, {
	entry: {
		index: './src/index.jsx'
	},
	output: {
		path: path.join(__dirname, './dist'),
		filename: '[name].js'
	},
	plugins: [
		new ExtractTextPlugin('editor.css'),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	devServer: {
		port: 10086,
		stats: {
			chunks: false
		},
		hot: true
	}
})