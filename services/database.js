const {access, constants, writeFile} = require('fs');
const {promisify} = require('util');

const write = promisify(writeFile);
const exists = promisify(access);

/**
 *
 * @param store
 * @returns {function(*): *}
 */
const get = (store) => (key) => store[key];

/**
 *
 * @param store
 * @returns {function(*, *): *}
 */
const set = (store) => (key, value) => store[key] = value;

/**
 *
 * @param store
 * @returns {function(*): boolean}
 */
const del = (store) => (key) => delete store[key];

/**
 *
 * @param path
 * @param store
 * @returns {function(*=): *}
 */
const save = async (path, store) => write(path, JSON.stringify(store));

/**
 *
 * @param path
 * @returns {Promise<*>}
 */
const load = async (path) => {
	let store;

	try {
		await exists(path, constants.F_OK);
		store = require(path);
	}
	catch (e) {
		await write(path, JSON.stringify({}));
		store = {};
	}

	return store;
};

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 12.10.2018
 * Time: 22:13
 *
 * @param path
 * @returns {Promise<{get: (function(*): *), set: (function(*, *=): *), del: (function(*): boolean), save: (function(): function(*=): *)}>}
 */
module.exports = async (path) => {
	const store = await load(path);

	return {
		get: get(store),
		set: set(store),
		del: del(store),
		save: () => save(path, store),
	};
};
