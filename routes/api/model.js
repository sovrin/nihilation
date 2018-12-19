const {Router} = require('express');
const router = Router({mergeParams: true});
const {cacheable, sanitize, hellgate} = require('../../middlewares');

const Models = require('../../models');
const whitelist = Object.keys(Models);

const auth = hellgate(whitelist);
const cache = cacheable('models');

/**
 *
 * @param req
 * @param res
 * @param next
 */
const get = (req, res, next) => {
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
};

const post = () => {
	console.info('WOOO');
};

router.use(auth);
router.get('/', cache);
router.get('/', get);

router.post('/', sanitize);
router.post('/', post);

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 23.10.2018
 * Time: 21:13
 */
module.exports = router;
