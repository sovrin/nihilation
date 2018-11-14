const Model = require('../lib/Model');

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 12.10.2018
 * Time: 19:31
 */
class Stock extends Model {

	static name = 'stock';

	/**
	 *
	 * @param title
	 * @param name
	 * @param size
	 * @param type
	 * @param price
	 * @param available
	 * @param description
	 * @param front
	 * @param back
	 * @param print
	 */
	constructor(title, name, size, type, price, available, description, front, back, print) {
		super();

		this._title = title;
		this._name = name;
		this._size = size;
		this._type = type;
		this._price = price;
		this._available = available;
		this._description = description;
		this._front = front;
		this._back = back;
		this._print = price;
		this._print = print;
	}

	/**
	 *
	 * @param title
	 * @param name
	 * @param size
	 * @param type
	 * @param price
	 * @param available
	 * @param description
	 * @param front
	 * @param back
	 * @param print
	 * @returns {Stock}
	 */
	static create({title, name, size, type, price, available, description, front, back, print}) {
		return new Stock(title, name, size, type, price, available, description, front, back, print);
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

	/**
	 *
	 * @returns {*}
	 */
	get name() {
		return this._name;
	}

	/**
	 *
	 * @param value
	 */
	set name(value) {
		this._name = value;
	}

	/**
	 *
	 * @returns {*}
	 */
	get size() {
		return this._size;
	}

	/**
	 *
	 * @param value
	 */
	set size(value) {
		this._size = value;
	}

	/**
	 *
	 * @returns {*}
	 */
	get type() {
		return this._type;
	}

	/**
	 *
	 * @param value
	 */
	set type(value) {
		this._type = value;
	}

	/**
	 *
	 * @returns {*}
	 */
	get price() {
		return this._price;
	}

	/**
	 *
	 * @param value
	 */
	set price(value) {
		this._price = value;
	}

	/**
	 *
	 * @returns {*}
	 */
	get available() {
		return this._available;
	}

	/**
	 *
	 * @param value
	 */
	set available(value) {
		this._available = value;
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
	get front() {
		return this._front;
	}

	/**
	 *
	 * @param value
	 */
	set front(value) {
		this._front = value;
	}

	/**
	 *
	 * @returns {*}
	 */
	get back() {
		return this._back;
	}

	/**
	 *
	 * @param value
	 */
	set back(value) {
		this._back = value;
	}

	/**
	 *
	 * @returns {*}
	 */
	get print() {
		return this._print;
	}

	/**
	 *
	 * @param value
	 */
	set print(value) {
		this._print = value;
	}
}

module.exports = Stock;
