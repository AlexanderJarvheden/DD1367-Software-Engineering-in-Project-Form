/**
 * Where we are going to place the code, the endpoint of the function
 * the function that is going to run when we assign the endpoint url
 * to get a list of users
 */

// REST API demo in Node.js

var express = require('express'); // Require the express framework
var app = express();
var fs = require('fs'); // Require file system object (our database is in a file instead of server)


// goes to read the users.json file in the same directory and then place the content into that data, log displays the data
// Endpoint to get a list of users
app.get('/getUsers', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf-8', function(err, data){
        console.log(data);
        res.end(data); // can also use res.send()
    });
})

// Create a server to listen at port 8080
var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})
