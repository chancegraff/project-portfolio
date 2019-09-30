const path = require('path');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');

const { models, database } = require('./__models__');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const port = process.env.PORT || 5000;

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    database,
    models
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

database.sync().then(() => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  });
});
