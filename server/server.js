const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');
const { times } = require('lodash');
const { ApolloServer } = require('apollo-server-express');

const database = require('./models');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

const port = process.env.PORT || 5000;

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    database
  }
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

apollo.applyMiddleware({
  app
});

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
  });
}

database.sequelize.sync().then(() => database.project.count().then((count) => {
  if(process.env.NODE_ENV === 'development' && count < 10) {
    database.project.bulkCreate(
      times(10, () => ({
        name: faker.lorem.words(),
        description: faker.lorem.words(),
        shortDescription: faker.lorem.words(),
        herokuUrl: faker.internet.url(),
        slug: faker.lorem.slug(),
      }))
    );
  }

  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  });
}));
