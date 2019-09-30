module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('project', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    shortDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return Project;
};
