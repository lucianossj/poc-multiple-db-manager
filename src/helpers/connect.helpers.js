require('dotenv').config();
require('mysql');

var connection = [
    require('knex')({
        client: 'mysql',
        connection: {
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '927610jen',
            database: 'poc1',
            timezone: 'utc-3'
        }
    }),
    require('knex')({
        client: 'mysql',
        connection: {
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '927610jen',
            database: 'poc2',
            timezone: 'utc-3'
        }
    }),
    require('knex')({
        client: 'mysql',
        connection: {
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '927610jen',
            database: 'poc3',
            timezone: 'utc-3'
        }
    })
];


module.exports = connection;