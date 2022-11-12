//importing modules
const db = require("../Model/dashboard");

// Assigning users to the variable User
const Dashboard = db.dashboards;

//creating dashboard
const createDashboard = async (req, res) => {
 try {
   const { userName, created_by } = req.body;
   const data = {
     userName,
     created_by,
   };
   //giving the person who has created the id ,write access over dashboard and all the components
   data.accessedByUsers.push(created_by);
   data.rolesOfUsers.push("Write");
   data.rolesForEdit.push("Write");
   data.rolesForText.push("Write");
   //saving the dashboard
   const dashboard = await Dashboard.create(data);

 } catch (error) {
   console.log(error);
 }
};

module.exports = {
 createDashboard
};