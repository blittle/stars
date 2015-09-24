var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: "./app.js",
	output: {
		path: "build",
		filename: "bundle.js"
	},
	cssnext: {
	},
	devtool: "sourcemap",
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				loaders: ["style-loader", "css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]", "cssnext-loader"]
			}
		]
	},
	plugins: [
		// new ExtractTextPlugin("[name].css")
	]
}
