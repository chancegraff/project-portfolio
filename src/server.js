const cors = require('cors');
const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const epilogue = require('epilogue');
const { graphqlExpress } = require('apollo-server-express');
const typeDefs = require('./schema');
const path = require('path');

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// const database = new Sequelize({
//   dialect: 'sqlite',
//   storage: './db.sqlite',
// });

// const Project = database.define('projects', {
//   name: Sequelize.STRING,
//   description: Sequelize.TEXT,
//   shortDescription: Sequelize.TEXT
// });

// epilogue.initialize({
//   app,
//   sequelize: database,
// });

// epilogue.resource({
//   model: Project,
//   endpoints: [
//     '/projects'
//   ],
// });

// app.use('/graphql', bodyParser.json(), graphqlExpress({
//   schema: typeDefs,
// }));

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

// database.sync().then(() => {
//   app.listen(port, () => {
//     console.log(`Listening on port ${port}`)
//   });
// });
