const {Router} = require('express');
const router = Router();

router.use('/:model/:id?', require('./model'));

module.exports = router;
