const Model = require('../lib/Model');

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 10.10.2018
 * Time: 23:24
 */
class Band extends Model {

    /**
     *
     * @param about
     * @param copyright
     */
    constructor(about, copyright) {
        super();

        this._about = about;
        this._copyright = copyright;
    }

    /**
     *
     * @param about
     * @param copyright
     * @returns {Band}
     */
    static create({about, copyright}) {
        return new Band(about, copyright);
    }

    /**
     *
     * @returns {*}
     */
    get about() {
        return this._about;
    }

    /**
     *
     * @param value
     */
    set about(value) {
        this._about = value;
    }

    /**
     *
     * @returns {*}
     */
    get copyright() {
        return this._copyright;
    }

    /**
     *
     * @param value
     */
    set copyright(value) {
        this._copyright = value;
    }
}

module.exports = Band;
