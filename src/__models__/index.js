const Sequelize = require('sequelize');

const database = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
});

const models = {
  Project: database.import('./project'),
};

module.exports = {
  models,
  database
};
