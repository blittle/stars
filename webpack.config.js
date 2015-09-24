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
			// {
			// 	test: /\.css$/,
			// 	loader: ExtractTextPlugin.extract("style-loader", "css-loader?root=.|!cssnext-loader")
			// },
			{
				test: /\.css$/,
				loaders: ["style-loader", "css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]", "cssnext-loader"]
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader?root=.|!less-loader")
			}
		]
	},
	plugins: [
		// new ExtractTextPlugin("[name].css")
	]
}
