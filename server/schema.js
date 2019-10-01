const { gql } = require('apollo-server');

const typeDefs = gql`
  type Project {
    id: ID!
    name: String!
    description: String!
    shortDescription: String!
    slug: String!
    herokuUrl: String!
  }

  type Query {
    projects: [Project!]!
    project(id: ID!): Project!
  }
`;

module.exports = typeDefs;
