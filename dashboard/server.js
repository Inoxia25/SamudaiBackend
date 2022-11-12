//importing modules
const express = require('express')
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const db = require('./Model/dashboard')
 const dashboardRoutes = require ('./Routes/dashboardRoutes')

//setting up your port
const PORT = process.env.PORT || 8080

//assigning the variable app to express
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

//synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync({ force: true }).then(() => {
    console.log("db has been re sync")
})

//routes for the user API
app.use('/api/dashboard', dashboardRoutes)

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))