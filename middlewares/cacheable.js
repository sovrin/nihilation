const {resolve} = require('path');
const {existsSync, mkdirSync} = require('fs');
const {database, contentful: {getEntries}} = require('../services');

/**
 *
 * @param namespace
 * @returns {Function}
 */
const factory = (namespace) => {
	const dir = resolve(process.cwd(), 'cache', namespace);

	if (!existsSync(dir)) {
		mkdirSync(dir);
	}

	/**
	 *
	 */
	return async (req, res, next) => {
		const {params: {model}} = req;

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

//todo split from entity fetch and cache
// pre tries to load cache
// post saves data to cache
const pre = () => {};
const post = () => {};

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 22.10.2018
 * Time: 21:04
 */
module.exports = factory;
