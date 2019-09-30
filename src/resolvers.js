module.exports = {
  Query: {
    projects: (parent, args, { database }, info) => {
      return database.project.findAll()
    },
  },
};
