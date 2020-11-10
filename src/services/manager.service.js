const Router = require('restify-router').Router;
const router = new Router();
const errors = require('restify-errors');
const connections = require('../helpers/clients-connections.json');

function executeQuery(request, response) {

    connections.forEach(connection => {
        require('knex')({
            client: 'mysql',
            connection: {
                host: connection.host,
                port: connection.port,
                user: connection.user,
                password: connection.password,
                database: connection.database,
                timezone: connection.timezone,
                insecureAuth : true
            }
        }).raw(request.body.query)
        .then(data => response.send(200, 'It worked!'))
        .catch(error => console.log(500, new errors.InternalServerError(`Not working... - ${error}`)));
    });

}

router.post('', executeQuery);

module.exports = router;