const Model = require('../lib/Model');

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 12.10.2018
 * Time: 19:08
 */
class News extends Model {

    /**
     *
     * @param title
     * @param release
     * @param article
     * @param media
     * @param video
     */
    constructor(title, release, article, media, video) {
        super();

        this._title = title;
        this._release = release;
        this._article = article;
        this._media = media;
        this._video = video;
    }

    /**
     *
     * @param title
     * @param release
     * @param article
     * @param media
     * @param video
     * @returns {News}
     */
    static create({title, release, article, media, video}) {
        return new News(title, release, article, media, video);
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
    get release() {
        return this._release;
    }

    /**
     *
     * @param value
     */
    set release(value) {
        this._release = value;
    }

    /**
     *
     * @returns {*}
     */
    get article() {
        return this._article;
    }

    /**
     *
     * @param value
     */
    set article(value) {
        this._article = value;
    }

    /**
     *
     * @returns {*}
     */
    get media() {
        return this._media;
    }

    /**
     *
     * @param value
     */
    set media(value) {
        this._media = value;
    }

    /**
     *
     * @returns {*}
     */
    get video() {
        return this._video;
    }

    /**
     *
     * @param value
     */
    set video(value) {
        this._video = value;
    }
}

module.exports = News;
