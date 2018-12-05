const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = merge(require('./webpack.common.babel'), {
	mode: 'production',

	entry: [
		'@babel/polyfill',
		'webpack-hot-middleware/client?reload=true',
		path.join(process.cwd(), 'client/app.jsx'),
	],

	output: {
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
	},

	module: {
		rules: [
			{
				test: /\.js?$|\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					cacheDirectory: true,
					plugins: ['react-hot-loader/babel'],
				},
			},
		],
	},

	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			inject: true,
			template: 'client/index.html',
		}),
		new CircularDependencyPlugin({
			exclude: /a\.js|node_modules/,
			failOnError: false,
		}),
	],

	devtool: 'eval-source-map',

	performance: {
		hints: false,
	},
});