/**
 *
 * @param whitelist
 * @param entry
 * @returns {boolean}
 */
const validate = (whitelist, entry) => (
	entry && whitelist.includes(entry)
);

/**
 *
 * @param whitelist
 * @returns {Function}
 */
const factory = (whitelist) => (
	async (req, res, next) => {
		const {params: {model}} = req;

		if (!validate(whitelist, model)) {
			return res.status(400).send();
		}

		return next();
	}
);

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 19.12.2018
 * Time: 23:56
 */
module.exports = factory;
