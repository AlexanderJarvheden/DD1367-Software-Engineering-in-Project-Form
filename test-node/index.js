import express from 'express';
import bodyParser from 'body-parser'; // Allows us to take in incoming post requests bodies

import usersRoutes from './routes/users.js';

// init the whole application in the variable app
const app = express();
const PORT = 5000; // for backend since frontend is usually on localhost 3000

app.use(bodyParser.json()); // we are going to use json data in the whole application

// all routes in here are starting with '/users'
app.use('/', usersRoutes); // when started it runs the function usersRoutes

// create a route that is expecting a get request using req=request and res=response as parameters in callback functin
app.get('/', (req, res) => {
    res.send('Hello from Homepage.');
});

// make application listen for incoming requests, by specifiying the port to listen on and a function that executes when the server is run
app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`)); // use backstring (`) instead of (') to enter variables

// npm install --save-dev nodemon
// nodemon runs our server so we dont have to run the server for each update

