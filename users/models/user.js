//importing modules
const {Sequelize, DataTypes} = require('sequelize')

//Database connection with dialect of postgres specifying the database we are using

const sequelize = new Sequelize(`postgres://qscrujtp:RcLzdzYqLa53PU-r_kZHmxKPj9UBcE75@tiny.db.elephantsql.com/qscrujtp`, {dialect: "postgres"})

//checking if connection is done
    sequelize.authenticate().then(() => {
        console.log(`Database connected`)
    }).catch((err) => {
        console.log(err)
    })

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

//connecting to model
db.users = require('./userModel') (sequelize, DataTypes)

//exporting the module
module.exports = db