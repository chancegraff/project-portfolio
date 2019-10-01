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
    project(slug: String!): Project
  }
`;

module.exports = typeDefs;
