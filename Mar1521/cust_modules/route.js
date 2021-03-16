const express = require('express')

const looper = require('./looper.js')

const router = express.Router()

router.get('/', function (req, res) {
  res.send(looper)
})

router.get('/api', function (req, res) {
  res.send('/api')
})

router.get('/api/route', function (req, res) {
  res.send('/api/routes')
})

module.exports = router

//  *********************************************  COMMENTS  ******************************************************************
//
//  Line 1:  Declares the express variable and loads the Express npm module
//  Line 3:  Declares the variable looper and loads the looper.js module, found in the root director (./)
//  Line 5:  Declares the variable router and assigns it to the express function using the .Router() class(?)
//  Line 7:  Using the router function with the .get method, sends the return of the looper function, which is a list of items
//  Line 7:  The home page route sending the result of the looper function
//  Line 8:  Using the response function with the .send method, sends the returned list from the looper to the browser
//  Line 11: The /api route, which outputs the string "/api" (Line 12)
//  Line 15: The /api/route endpoint, which outputs the string "/api/route" (Line 16)
//  Line 19: Turns this file into a module called router that can be loaded into other Javascript files
//
//  ***************************************************************************************************************************