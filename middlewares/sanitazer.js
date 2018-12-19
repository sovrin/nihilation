const {pair} = require('../lib/utils');

const OPERATION = [
	(s) => s.replace(/<[^>]*>/g, ''),
];

/**
 *
 * @param object
 */
const sanitize = (object) => {
	const sanitized = {};

	try {
		for (let [key, string] of pair(object)) {
			for (const operation in OPERATION) {
				string = operation(string);
			}

			sanitized[key] = string;
		}
	} catch (e) {
		return null;
	}

	return sanitized;
};

/**
 *
 * @returns {Function}
 */
const factory = () => {
	return async ({body, params: {model}}, res, next) => {
		next();
	};
};

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 19.12.2018
 * Time: 23:34
 */
module.exports = factory;
