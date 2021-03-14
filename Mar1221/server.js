//  Looper module

const dotenv = require('dotenv').config() 
const express = require('express')

const app = express()
const looper = require('./cust_modules/looper.js')

app.get('/', function(req, res) {
  res.send(looper)
})

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
//  Line 4:  Declares the express variable and loads the Express npm module
//  Line 6:  Declares the app variable and assigns it the express function, providing the .get(), .use() and .listen() methods
//  Line 7:  Declares the looper variable, which gets assigned the value of image_url from the looper function
//  Line 7:  The argument is the file path to the looper function (looper.js)
//  Line 9:  Invokes the app.get that receives the GET request from the browser.
//  Line 9:  The first parameter is the page being requested; the second parameter is a callback function declaring the req and res functions 
//  Line 10:  Using the res.get method to send the value of the looper variable, which is defined by the looper function (looper.js)
//  Line 13 - 16:  Standard error handling response
//  Line 20 - 22:  Listening on the port defined by the environment variable and console.logging to the command line
//
//  *****************************************************************************************************************************************