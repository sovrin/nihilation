const Model = require('../lib/Model');

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 19.12.2018
 * Time: 23:10
 */
class Contact extends Model {

	static name = 'contact';

	/**
	 *
	 * @param valador
	 * @param name
	 * @param email
	 * @param message
	 */
	constructor(valador, name, email, message) {
		super();

		this._valador = valador;
		this._name = name;
		this._email = email;
		this._message = message;
	}

	/**
	 *
	 * @param valador
	 * @param name
	 * @param email
	 * @param message
	 * @returns {Contact}
	 */
	static create({valador, name, email, message}) {
		return new Contact(valador, name, email, message);
	}

	/**
	 *
	 * @returns {*}
	 */
	get valador() {
		return this._valador;
	}

	/**
	 *
	 * @param value
	 */
	set valador(value) {
		this._valador = value;
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
	get message() {
		return this._message;
	}

	/**
	 *
	 * @param value
	 */
	set message(value) {
		this._message = value;
	}
}

module.exports = Contact;
