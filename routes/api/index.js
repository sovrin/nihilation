const {Router} = require('express');
const router = Router();
const cache = require('../../middlewares/cache');

router.use(cache({
    '/member': 'member.json',
}));
router.use('/member', require('./member'));

module.exports = router;
