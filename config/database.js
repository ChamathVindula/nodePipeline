const Sequelize = require('sequelize');

module.exports = new Sequelize('ebdb', 'nodeRDS', 'Pa55w.rd', {
    host: 'aa17d8sght1n75v.ckr9p0ayr1p1.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
});