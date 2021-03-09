//  Setting up a server using the builtin 'http' module

const http = require('http')                   

const server = http.createServer(function(request, response) {

  response.writeHead(200, {"Content-Type": "text/html; charset=utf-9"})
  response.end(`<h1>Server</h>`)
  
})

server.listen(8080, function() {

  console.log(`Listening on port 8080.`)

})

//  ***********************************************  COMMENTS  ************************************************************************  
//
//  Line 3:  Declares a constant called "http" that uses the require function to load the `http` builtin module
//  Line 5:  Declares a constant called "server" that uses the 'http' module, createServer method(?) which creates a callback function
//  Line 5:  This callback function is passed the objects `request` and `response`
//  Line 7:  The response function is invoked with the writeHead method(?) being passed two arguments
//  Line 7:  The first argument is the code 200, and the second argument is the type format of the ???
//  Line 8:  The response function is called with the `end` method(?) being passed the HTML which is displayed on the page
//  Line 12: The server function is invoked, passing 8080 (the port) and a callback function which console.logs the statement (Line 14)
//
//  Note:  Nothing happens until the server function is invoked on Line 12
//
//  ***********************************************************************************************************************************