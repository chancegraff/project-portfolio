const Sequelize = require('sequelize');

let database;

if(process.env.NODE_ENV === 'production') {
  database = new Sequelize(
    process.env.DATABASE_URL,
    {
      dialect: 'postgres',
    }
  );
} else {
  database = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
      dialect: 'postgres',
    },
  );
}

const models = {
  Project: database.import('./project'),
};

module.exports = {
  models,
  database
};
