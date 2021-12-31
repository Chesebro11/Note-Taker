// Require
const { Router } = require('express');

const noteRoutes = require('../apiRoutes/noteRoutes');

Router.use(noteRoutes);

module.exports = router;
