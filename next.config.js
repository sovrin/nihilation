const webpack = require('webpack');

const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');
const withImages = require('next-images');
const dotenv = require('dotenv');
const {resolve} = require('path');

const {parsed} = dotenv.config();

let config = withLess({
    webpack(config) {
        let {resolve: {alias}} = config;

        alias = Object.assign(alias, {
            lib: resolve(__dirname, 'lib'),
        });

        config.resolve.alias = alias;
        config.resolve.modules.push(
            __dirname,
            resolve(__dirname, 'components'),
            resolve(__dirname, 'layouts'),
            resolve(__dirname, 'static'),
            resolve(__dirname, 'contexts'),
            resolve(__dirname, 'styles'),
        );

        config.plugins.push(new webpack.EnvironmentPlugin(parsed));

        return config;
    },
});

config = withCss(config);
config = withImages(config);

module.exports = config;

