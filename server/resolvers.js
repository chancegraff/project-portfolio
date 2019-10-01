module.exports = {
  Query: {
    projects: (parent, args, { database }, info) => {
      return database.project.findAll();
    },
    project: (parent, { id }, { database }, info) => {
      return database.project.findAll({
        where: {
          id
        }
      });
    }
  },
};
