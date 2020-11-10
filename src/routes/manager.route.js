const Router = require('restify-router').Router;
const router = new Router();

const managerService = require('../services/manager.service');

router.add('/manager', managerService);

module.exports = router;