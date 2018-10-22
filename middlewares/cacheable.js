const {resolve} = require('path');
const {database, contentful: {getEntries}} = require('../services');

/**
 *
 * @param whitelist
 * @param model
 * @param method
 * @returns {boolean}
 */
const validate = (whitelist, model, method) => (
    model && whitelist.includes(model) && method === 'GET'
);

/**
 *
 * @returns {Function}
 */
const middleware = (whitelist) => async (req, res, next) => {
    const {method, params: {model}} = req;

    if (!validate(whitelist, model, method)) {
        return next();
    }

    const file = resolve(process.cwd(), 'cache', `${model}.json`);
    const db = await database(file);

    let data = db.get('data');

    if (!data) {
        data = await getEntries({content_type: model});

        db.set('data', data);
        db.save();
    }

    res.locals.data = data;

    next();
};

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 22.10.2018
 * Time: 21:04
 */
module.exports = middleware;
