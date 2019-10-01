const { UserInputError } = require('apollo-server');

module.exports = {
  Query: {
    projects: (parent, args, { database }, info) => {
      return database.Project.findAll({
        order: [
          [
            'createdAt',
            'DESC',
          ],
        ],
      });
    },
    project: (parent, { slug }, { database }, info) => {
      return database.Project.findOne({
        where: {
          slug,
        },
      });
    },
  },
};
