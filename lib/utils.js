/**
 *
 */
const noop = () => {};

/**
 *
 * @param subject
 * @returns {string}
 */
const cc = (...subject) => {
	let composed = [];

	if (subject.constructor !== Array) {
		subject = new Array(subject);
	}

	const lookup = (entry) => ({
		[String]: () => composed.push(entry),
		[Number]: () => composed.push(entry),
		[Array]: () => composed.push(cc(...entry)),
		[Object]: () => Object
			.keys(entry)
			.forEach((prop) => {
				(entry[prop]) && composed.push(prop);
			}),
	}[entry.constructor])();

	subject
		.filter((cls) => cls != null)
		.map(lookup)
	;

	return composed
		.join(' ')
		.trim()
		.toLowerCase()
	;
};

/**
 *
 * @param object
 * @returns {*[]}
 */
const value = (object) => Object.keys(object).map(key => object[key]);

/**
 *
 * @param object
 * @returns {any[][]}
 */
const pair = (object) => Object.keys(object).map(key => [key, object[key]]);

/**
 *
 * @param obj
 * @returns {any[]}
 */
const constants = (obj) => (
	Object.keys(obj).map(key => obj[key])
);

module.exports = {
	cc,
	noop,
	value,
	pair,
	constants,
};
