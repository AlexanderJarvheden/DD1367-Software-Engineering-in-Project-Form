// CONNECTOR
// Enligt stackoverflow:
// Install: npm i mariadb
// https://github.com/MariaDB/mariadb-connector-nodejs

// Acquire a connection to the MariaDB database by specifying the credentials
const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'mydb.com', 
    user: 'username', 
    password: '1234',
    database: 'loopboxDB'
});

pool.getConnection()
    .then(conn => {
        //QUERY
        conn.query("SELECT 1 as val")
            .then((rows) => {
                console.log(rows); //[ {val: 1}, meta: ... ]
                conn.end(); // close connection after execution
            })
            .catch(err => {
                // Handle error for the query
                console.error("Error executing query:", err);
                conn.end(); // Close the connection in case of error
            })
    })
    .catch(err => {
        // Handle error for establishing connection
        console.error("Error connecting to database:", err);
    });