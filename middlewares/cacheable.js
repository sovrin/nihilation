const {resolve} = require('path');
const {existsSync, mkdirSync} = require('fs');
const {database, contentful: {getEntries}} = require('../services');

/**
 *
 * @param whitelist
 * @param entry
 * @param method
 * @returns {boolean}
 */
const validate = (whitelist, entry, method) => (
	entry && whitelist.includes(entry) && method === 'GET'
);

/**
 *
 * @param namespace
 * @param whitelist
 * @returns {Function}
 */
const factory = (namespace, whitelist) => {
	const dir = resolve(process.cwd(), 'cache', namespace);

	if (!existsSync(dir)) {
		mkdirSync(dir);
	}

	/**
	 *
	 */
	return async (req, res, next) => {
		const {method, params: {model}} = req;

		if (!validate(whitelist, model, method)) {
			return next();
		}

		const file = resolve(dir, `${model}.json`);
		const {get, save, set} = await database(file);

		let data = get('data');

		if (!data) {
			data = await getEntries({content_type: model});

			set('data', data);
			save();
		}

		res.locals.data = data;

		next();
	};
};

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 22.10.2018
 * Time: 21:04
 */
module.exports = factory;
