const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, "src"),
				loader: "babel-loader?cacheDirectory=true",
				options: {
					presets: ['env', 'react']
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg)$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			inject: true,
			template: './public/index.html'
		}),
		new CopyWebpackPlugin([
			'./public/manifest.json',
			'./public/chrome-touch-icon.png',
			'./public/chrome-touch-icon-512x512.png',
			'./public/apple-touch-icon.png',
			'./public/apple-touch-icon-120x120.png',
			'./public/apple-touch-icon-152x152.png',
			'./public/apple-touch-icon-180x180.png',
			'./public/apple-touch-icon-precomposed.png',
			'./public/favicon-16x16.png',
			'./public/favicon-32x32.png',
			'./public/favicon-96x96.png',
			'./public/favicon.ico'
		]),
		new WorkboxPlugin.GenerateSW()
	],
	output: {
		path: path.resolve(__dirname, 'dist')
	}
};
