/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 10.10.2018
 * Time: 22:31
 */
class Model {

	/**
	 *
	 */
	static get model() {
		throw Error('model can\'t be null');
	}

	/**
	 *
	 */
	static get structure() {
		throw Error('structure can\'t be null');
	}

	/**
	 *
	 */
	static get create() {
		throw Error('create can\'t be null');
	}
}

module.exports = Model;
