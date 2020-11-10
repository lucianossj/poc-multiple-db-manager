const Router = require('restify-router').Router;
const router = new Router();

router.add('/db-manager/v1', require('./manager.route'));

module.exports = router;
