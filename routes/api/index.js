const router = require('express').Router();
const courseRoutes = require('./thoughtRoutes');
const studentRoutes = require('./friendRoutes');

router.use('/courses', courseRoutes);
router.use('/students', studentRoutes);

module.exports = router;
