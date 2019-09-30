const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const database = {};

let sequelize;

if(process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(
    process.env.DATABASE_URL,
    {
      dialect: 'postgres',
    }
  );
} else {
  sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
      dialect: 'postgres',
    },
  );
}

fs.readdirSync(__dirname)
  .filter((file) => (
    file.indexOf('.') !== 0)
      && (file !== basename)
      && (file.slice(-3) === '.js'
  ))
  .forEach((file) => {
    const model = sequelize['import'](path.join(__dirname, file));

    database[model.name] = model;
  });

Object.keys(database).forEach(modelName => {
  if (database[modelName].associate) {
    database[modelName].associate(database);
  }
});

database.sequelize = sequelize;
database.Sequelize = Sequelize;

module.exports = database;
