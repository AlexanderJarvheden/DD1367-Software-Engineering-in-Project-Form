import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt';
import { addUser, loginUser } from '../database_management/dbPG/functions.js'; // Correct path if necessary

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Handle user signup
app.post('/signup', async (req, res) => {
    try {
        const userData = req.body;
        const result = await addUser(userData);
        res.status(201).json({
            message: 'User successfully registered',
            userId: result.userId
        });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({
            message: 'Failed to register user',
            error: error.message
        });
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body; // Capture email and password from the request body
    console.log("Received credentials:", { email, password }); // Log received credentials

    try {
        const result = await loginUser(email, password);
        if (result.success) {
            res.status(200).json({ success: true, message: "Login successful", user: result.user });
        } else {
            res.status(401).json({ success: false, message: result.message });
        }
    } catch (error) {
        console.error('Server error during login:', error);
        res.status(500).json({ success: false, message: "Internal server error", error: error.toString() });
    }
});


// Serve the SPA's index.html for all other requests to enable HTML5 history
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
