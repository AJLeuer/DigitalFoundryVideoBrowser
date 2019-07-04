const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');

module.exports =
{
	mode: "development",
	devtool: "source-map",
	entry:
    {
        Scripts:
        [
	        "./Source/Controller/DigitalFoundryVideoInformationController.js",
	        "./Source/Services/DigitalFoundryVideoInformationService.js",
	        "./Source/View/VideoEntry.js",
	        "./Source/View/MainView.js",
	        "./Source/Main.js"
        ]
    },
    output:
    {
        path: path.resolve(__dirname, "Extension"),
        filename: "Main.js"
    },
	plugins:
	[
		new CopyPlugin(
		[
			{ from: './manifest.json', to: './' },
			{ from: './Source/MainView.html', to: './' },
			{ from: './Source/MainView.css', to: './' },
			{ from: './Icons', to: './Icons' }
		]),
	],
	node:
	{
		console: true,
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	}
};
