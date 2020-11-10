const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');
const Router = require('restify-router').Router;
const routerInstance = new Router();
const routes = require('./src/routes');

const server = restify.createServer({name: 'poc-multiple-db-manager', version: '0.1'});

const cors = corsMiddleware({
    origins: ["*"],
    allowHeaders: ["x-access-token"],
    exposeHeaders: ["x-access-token"]
  });

server.pre(cors.preflight);
server.use(cors.actual);

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Authorization, Content-Type');

    next();
});

routes.applyRoutes(server);
routerInstance.applyRoutes(server);
server.listen(3000, () => {
    console.log('POC - MULTIPLE DATABASE MANAGER');
})
