import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt'; // For hashing password, use this or something else in the future.
import { addUser, loginUser } from '../database_management/dbPG/functions.js'; // Correct path if necessary

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); // create an express application
const port = 3000; // Port where server will be listening to

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Handle user signup
app.post('/signup', async (req, res) => {
    try {
        const userData = req.body; // Extract user data from form they filled in on website
        const result = await addUser(userData); // Attempt to sign up a user
        res.status(201).json({
            message: 'User successfully registered',
            userId: result.userId
        });
    } catch (error) { // If it didnt work we get why in console
        console.error('Signup error:', error);
        res.status(500).json({
            message: 'Failed to register user',
            error: error.message
        });
    }
});

// Handle user login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body; // Capture email and password from the request body
    console.log("Received credentials:", { email, password }); // Log received credentials

    try {
        const result = await loginUser(email, password); // Attempt to log in user
        if (result.success) {
            res.status(200).json({ success: true, message: "Login successful", user: result.user });
        } else {
            res.status(401).json({ success: false, message: result.message }); // User failed to log in 
        }
    } catch (error) { // explain what happened in console
        console.error('Server error during login:', error); 
        res.status(500).json({ success: false, message: "Internal server error", error: error.toString() });
    }
});


// Serve the SPA's index.html for all other requests to enable HTML5 history
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
