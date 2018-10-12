const Member = require('../models/Member');
const {getEntries} = require('../services/contentful');

/**
 *
 * @returns {Promise<Member[] | never>}
 */
const getMembers = () => (
    getEntries({content_type: 'member'})
        .then((members) => (
            members.map(({fields}) => (
                Member.create(fields)),
            )),
        )
);

module.exports = {
    getMembers,
};
