const {Router} = require('express');
const router = Router();
const {getMembers} = require('../../loaders/members');

router.get('/', async (req, res) => {
    const {locals: {cacher}} = res;
    let data = cacher.get('data');

    if (!data) {
        data = await getMembers();
        cacher.set('data', data);
        cacher.save();
    }

    res.json(data);
});

module.exports = router;
