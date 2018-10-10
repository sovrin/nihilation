/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 10.10.2018
 * Time: 23:16
 */
export default class Location {

    _city;
    _country;
    _loc;
    _name;

    /**
     *
     * @param city
     * @param country
     * @param loc
     * @param name
     */
    constructor(city, country, loc, name) {
        this._city = city;
        this._country = country;
        this._loc = loc;
        this._name = name;
    }

    /**
     *
     * @param city
     * @param country
     * @param loc
     * @param name
     * @returns {Location}
     */
    static create({city, country, loc, name}) {
        return new Location(city, country, loc, name);
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
    get loc() {
        return this._loc;
    }

    /**
     *
     * @param value
     */
    set loc(value) {
        this._loc = value;
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
