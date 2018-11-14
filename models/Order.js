const Model = require('../lib/Model');

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 12.10.2018
 * Time: 19:18
 */
class Order extends Model {

	static name = 'order';

	/**
	 *
	 * @param firstName
	 * @param lastName
	 * @param company
	 * @param email
	 * @param phone
	 * @param country
	 * @param address
	 * @param zip
	 * @param city
	 */
	constructor(firstName, lastName, company, email, phone, country, address, zip, city) {
		super();

		this._firstName = firstName;
		this._lastName = lastName;
		this._company = company;
		this._email = email;
		this._phone = phone;
		this._country = country;
		this._address = address;
		this._zip = zip;
		this._city = city;
	}

	/**
	 *
	 * @param firstName
	 * @param lastName
	 * @param company
	 * @param email
	 * @param phone
	 * @param country
	 * @param address
	 * @param zip
	 * @param city
	 * @returns {Order}
	 */
	static create({firstName, lastName, company, email, phone, country, address, zip, city}) {
		return new Order(firstName, lastName, company, email, phone, country, address, zip, city);
	}

	/**
	 *
	 * @returns {*}
	 */
	get firstName() {
		return this._firstName;
	}

	/**
	 *
	 * @param value
	 */
	set firstName(value) {
		this._firstName = value;
	}

	/**
	 *
	 * @returns {*}
	 */
	get lastName() {
		return this._lastName;
	}

	/**
	 *
	 * @param value
	 */
	set lastName(value) {
		this._lastName = value;
	}

	/**
	 *
	 * @returns {*}
	 */
	get company() {
		return this._company;
	}

	/**
	 *
	 * @param value
	 */
	set company(value) {
		this._company = value;
	}

	/**
	 *
	 * @returns {*}
	 */
	get email() {
		return this._email;
	}

	/**
	 *
	 * @param value
	 */
	set email(value) {
		this._email = value;
	}

	/**
	 *
	 * @returns {*}
	 */
	get phone() {
		return this._phone;
	}

	/**
	 *
	 * @param value
	 */
	set phone(value) {
		this._phone = value;
	}

	/**
	 *
	 * @returns {*}
	 */
	get country() {
		return this._country;
	}

	/**
	 *
	 * @param value
	 */
	set country(value) {
		this._country = value;
	}

	/**
	 *
	 * @returns {*}
	 */
	get address() {
		return this._address;
	}

	/**
	 *
	 * @param value
	 */
	set address(value) {
		this._address = value;
	}

	/**
	 *
	 * @returns {*}
	 */
	get zip() {
		return this._zip;
	}

	/**
	 *
	 * @param value
	 */
	set zip(value) {
		this._zip = value;
	}

	/**
	 *
	 * @returns {*}
	 */
	get city() {
		return this._city;
	}

	/**
	 *
	 * @param value
	 */
	set city(value) {
		this._city = value;
	}
}

module.exports = Order;
