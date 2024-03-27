import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Denna tar hand om endpoint kommunikation mellan front end och back end
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// För vår parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Root route serving the first page with the center button
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'App.js'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'public', 'pages', 'login.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'public', 'pages', 'signup.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'public', 'pages', 'contact.html'));
});

//Denna behövs annars ser dashboard skit ut för Kevin
app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

// Add a POST route for sign-up to handle the form submission
app.post('/signup', (req, res) => {
    // Here, you'll have access to req.body, which contains the form data
    const { name, email, password, phone, company, termsAccepted } = req.body;
    console.log("Datan vi har fått från frontend till backend", req.body);

    
    // // EXEMPELMETODER FÖR ATT KOLLA DATABASEN OM SAKER REDAN FINNS DÄR ELLER INTE
    // // METODERNA EXISTERAR INTE
    // if (emailAlreadyExists(email)) {
    //     // If the email is already in use, send a response indicating failure
    //     res.status(409).json({ message: "Email already in use." });
    // } else {
    //     // If the email is not in use, create a new account in the database
    //     createNewAccount({ name, email, password, phone, company });
    //     // Send a response indicating success
    //     res.status(201).json({ message: "Account created successfully." });
    // }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

