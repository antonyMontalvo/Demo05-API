const { db } = require('../config')
//database = {};

const Sequelize = require('sequelize'),
    sequelize = new Sequelize(db.database, db.user, db.password, {
        host: db.host,
        port: db.port,
        dialect: db.dialect
    });

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database: ' + err.message);
    });

database.sequelize = sequelize;

module.exports = database;
