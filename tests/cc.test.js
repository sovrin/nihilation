const {expect} = require('chai');
const {cc} = require('../lib/utils');

describe('cc()', () => {
	it('should compose form an object', () => {
		const expected = 'foo';
		const given = cc({foo: true, bar: false});

		expect(expected).to.be.equal(given);
	});

	it('should compose form a string', () => {
		const expected = 'foo';
		const given = cc('foo');

		expect(expected).to.be.equal(given);
	});

	it('should compose form a mixed type', () => {
		const expected = 'foo bar';
		const given = cc({foo: true, baz: false}, 'bar');

		expect(expected).to.be.equal(given);
	});

	it('should be lowercase', () => {
		const expected = 'foobar baz';
		const given = cc({FoOBaR: true}, 'BAZ');

		expect(expected).to.be.equal(given);
	});
});
