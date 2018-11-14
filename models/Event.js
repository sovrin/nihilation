const Model = require('../lib/Model');
const Location = require('./Location');

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 10.10.2018
 * Time: 23:14
 */
class Event extends Model {

	static name = 'event';

	/**
	 *
	 * @param date
	 * @param link
	 * @param location
	 * @param name
	 */
	constructor(date, link, location, name) {
		super();

		this._date = date;
		this._link = link;
		this._location = (location.fields) ? Location.create(location.fields) : location;
		this._name = name;
	}

	/**
	 *
	 * @param date
	 * @param link
	 * @param location
	 * @param name
	 * @returns {Event}
	 */
	static create({date, link, location, name}) {
		return new Event(date, link, location, name);
	}

	/**
	 *
	 * @returns {*}
	 */
	get date() {
		return this._date;
	}

	/**
	 *
	 * @param value
	 */
	set date(value) {
		this._date = value;
	}

	/**
	 *
	 * @returns {*}
	 */
	get link() {
		return this._link;
	}

	/**
	 *
	 * @param value
	 */
	set link(value) {
		this._link = value;
	}

	/**
	 *
	 * @returns {*}
	 */
	get location() {
		return this._location;
	}

	/**
	 *
	 * @param value
	 */
	set location(value) {
		this._location = value;
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
}

module.exports = Event;
