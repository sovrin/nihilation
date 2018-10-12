const database = require('../services/database');
const {resolve} = require('path');

const cacheRoot = resolve(process.cwd(), 'cache');

/**
 *
 * @param whitelist
 * @param url
 * @param method
 * @returns {boolean}
 */
const test = (whitelist, url, method) => {
    return !!whitelist[url] || method !== 'GET';
};

/**
 *
 * @param whitelist
 * @returns {Function}
 */
const middleware = (whitelist) => async (req, res, next) => {
    const {url, method} = req;

    if (!test(whitelist, url, method)) {
        return next();
    }

    const file = resolve(cacheRoot, whitelist[url]);
    res.locals.cacher = await database(file);

    next();
};

module.exports = middleware;
