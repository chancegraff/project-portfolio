const { UserInputError } = require('apollo-server');

module.exports = {
  Query: {
    projects: (parent, args, { database }, info) => {
      return database.project.findAll();
    },
    project: (parent, { slug }, { database }, info) => {
      return database.project.findOne({
        where: {
          slug
        }
      });
    },
  },
};
