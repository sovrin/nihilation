const Model = require('../lib/Model');

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 10.10.2018
 * Time: 22:58
 */
class Avatar extends Model {

	static name = 'avatar';

	/**
	 *
	 * @param description
	 * @param file
	 * @param title
	 */
	constructor(description, file, title) {
		super();

		this._description = description;
		this._file = file;
		this._title = title;
	}

	/**
	 *
	 * @param description
	 * @param file
	 * @param title
	 * @returns {Avatar}
	 */
	static create({description, file, title}) {
		return new Avatar(description, file, title);
	}

	/**
	 *
	 * @returns {*}
	 */
	get description() {
		return this._description;
	}

	/**
	 *
	 * @param value
	 */
	set description(value) {
		this._description = value;
	}

	/**
	 *
	 * @returns {*}
	 */
	get file() {
		return this._file;
	}

	/**
	 *
	 * @param value
	 */
	set file(value) {
		this._file = value;
	}

	/**
	 *
	 * @returns {*}
	 */
	get title() {
		return this._title;
	}

	/**
	 *
	 * @param value
	 */
	set title(value) {
		this._title = value;
	}
}

module.exports = Avatar;
