const { gql } = require('apollo-server');

const typeDefs = gql`
  type Project {
    name: String!
    description: String!
    shortDescription: String!
  }

  type Query {
    projects: [Project!]!
  }
`;

module.exports = typeDefs;
