const {createClient} = require('contentful');

const client = createClient({
	space: process.env.CMS_SPACE,
	accessToken: process.env.CMS_TOKEN,
});

/**
 *
 * @param content_type
 * @returns {Promise<Array<Entry<any>> | never>}
 */
const getEntries = ({content_type}) => (
	client
		.getEntries({content_type})
		.then((response => response.items))
);

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 23.10.2018
 * Time: 00:04
 */
module.exports = {
	getEntries,
};
