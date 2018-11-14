const {EnvironmentPlugin} = require('webpack');
const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');
const withImages = require('next-images');
const {resolve} = require('path');
const {config: parseEnv} = require('dotenv');

const {parsed} = parseEnv();
const env = new EnvironmentPlugin(parsed);

let config = withLess({
	webpack(config) {
		let {resolve: {alias}} = config;

		alias = Object.assign(alias, {
			utils: resolve(__dirname, 'lib', 'utils.js'),
		});

		config.resolve.mainFiles = ['index'];
		config.resolve.alias = alias;
		config.resolve.modules.push(
			resolve(__dirname),
		);

		config.plugins.push(env);
		return config;
	},
});

config = withCss(config);
config = withImages(config);

module.exports = config;

