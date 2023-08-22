const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const friendRoutes = require('./friendRoutes');

router.use('/thought', thoughtRoutes);
router.use('/friend', friendRoutes);

module.exports = router;
