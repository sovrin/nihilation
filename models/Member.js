const Model = require('../lib/Model');
const Avatar = require('./Avatar');

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 10.10.2018
 * Time: 22:55
 */
class Member extends Model {

    /**
     *
     * @param avatar
     * @param name
     * @param position
     * @param role
     */
    constructor(avatar, name, position, role) {
        super();

        this._avatar = (avatar.fields) ? Avatar.create(avatar.fields) : avatar;
        this._name = name;
        this._position = position;
        this._role = role;
    }

    /**
     *
     * @param avatar
     * @param name
     * @param position
     * @param role
     * @returns {Member}
     */
    static create({avatar, name, position, role}) {
        return new Member(avatar, name, position, role);
    }

    /**
     *
     * @returns {*}
     */
    get avatar() {
        return this._avatar;
    }

    /**
     *
     * @param value
     */
    set avatar(value) {
        this._avatar = value;
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
    get position() {
        return this._position;
    }

    /**
     *
     * @param value
     */
    set position(value) {
        this._position = value;
    }

    /**
     *
     * @returns {*}
     */
    get role() {
        return this._role;
    }

    /**
     *
     * @param value
     */
    set role(value) {
        this._role = value;
    }
}

module.exports = Member;
