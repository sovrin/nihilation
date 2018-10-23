const {cacheable} = require('../../middlewares');
const Models = require('../../models');

const cache = cacheable('models', Object.keys(Models));

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 23.10.2018
 * Time: 21:13
 */
module.exports = [
    cache,
    (req, res, next) => {
        const {params: {id}} = req;
        let {locals: {data}} = res;

        if (!data) {
            data = [];
        }

        if (id) {
            data = data.filter(({sys}) => (
                sys.id === id
            ));
        }

        res.json(data);
        next();
    },
];
