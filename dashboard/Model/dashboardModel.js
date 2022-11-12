//dashboard model
module.exports = (sequelize, DataTypes) => {
  const Dashboard = sequelize.define("dashboard", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unique_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    created_by: {
      //to store id of user who has created dashboard, so they have admin access
      type: DataTypes.UUID,
      allowNull: false,
    },
    accessedByUsers: {
      //storing names of users who have access to dashboard or parts of dashboard
      type: DataTypes.ARRAY(DataTypes.UUID),
    },
    rolesOfUsers: {
      //storing roles of users who have access to dashboard or parts of dashboard, so if a person in the above array is found at index i, his role is role_of_users[i]
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    rolesForEdit: {
      //roles of users for edit access management
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    rolesForText: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  });
  return Dashboard;
};
