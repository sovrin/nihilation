const Model = require('../lib/Model');

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 10.10.2018
 * Time: 23:01
 */
class File extends Model {

    /**
     *
     * @param filename
     * @param url
     */
    constructor(filename, url) {
        super();

        this._filename = filename;
        this._url = url;
    }

    /**
     *
     * @param filename
     * @param url
     * @returns {File}
     */
    static create({filename, url}) {
        return new File(filename, url);
    }

    /**
     *
     * @returns {*}
     */
    get filename() {
        return this._filename;
    }

    /**
     *
     * @param value
     */
    set filename(value) {
        this._filename = value;
    }

    /**
     *
     * @returns {*}
     */
    get url() {
        return this._url;
    }

    /**
     *
     * @param value
     */
    set url(value) {
        this._url = value;
    }
}

module.exports = File;
