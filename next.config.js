const withLess = require('@zeit/next-less');
const withImages = require('next-images');

const path = require('path');

let config = withLess({
    webpack(config) {
        let {resolve: {alias, modules}} = config;

        alias = Object.assign(alias, {
            lib: path.resolve(__dirname, 'lib'),
            config: path.resolve(__dirname, 'config.js'),
        });

        modules.push(
            __dirname,
            path.resolve(__dirname, 'components'),
            path.resolve(__dirname, 'layouts'),
            path.resolve(__dirname, 'static'),
        );

        config.resolve.alias = alias;
        config.resolve.modules = modules;

        return config;
    },
});

config = withImages(config);

module.exports = config;

