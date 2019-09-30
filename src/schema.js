const { gql } = require('apollo-server');

const typeDes = gql`
  type Project {
    name: String!
    description: String!
    shortDescription: String!
  }
`;

module.exports = typeDefs;
