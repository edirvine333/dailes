//  Looper app with a routing module

const dotenv = require('dotenv').config() 
const express = require('express')

const route = require('./cust_modules/route.js')

const app = express()

app.use("/api/route", route)

app.use(function (req, res) {
  res.status(404)
  res.send('Custom 404: File Not Found')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, function() {
  console.log(`Listening on port: ${PORT}`)
})

//  **********************************************************  COMMENTS  ********************************************************************
//
//  Line 3:  Declares the dotenv variable and loads the dotenv module using the config() method to define the environment variables
//  Line 4:  Declares thte express variable and loads the Express npm module
//  Line 6:  Declares the route variable and loads the custom module route.js, found in the ./cust_modules directory
//  Line 8:  Declares the app variable and assigned it the express function, providing the .use() and .listen() methods
//
//  Line 10: Using the app.use function to define the endpoint '/api/route' and passing it the variable "route" as an argument
//  Line 10: This points the server to the route.js module when /api/route is used in the URL
//
//  Line 12 - 15:  Error handling
//  Line 17 - 21:  Listening on the defined by the environment variable, or port 3000
//  
//  *****************************************************************************************************************************************