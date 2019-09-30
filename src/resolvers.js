module.exports = {
  Query: {
    projects: (parent, args, { models }, info) => {
      return models.Project.findAll()
    },
  },
};
