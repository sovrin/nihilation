const {Router} = require('express');
const router = Router();
const {cacheable} = require('../../middlewares');
const Models = require('../../models');

router.use('/:model', cacheable(Object.keys(Models)));
router.use('/:model', (req, res, next) => {
    const {locals: {data}} = res;
    res.json(data);

    next();
});

module.exports = router;
