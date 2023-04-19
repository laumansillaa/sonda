const router = require('express').Router();

router.post('/newadmin', require('./newAdmin'))
router.post('/login', require('./loginAdmin'))
// router.put('./updateadmin', require('./updateAdmin'))

module.exports = router;