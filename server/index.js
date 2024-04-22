import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '..', 'client', 'src')));

// Root route serving the first page with the center button
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'src', 'App.js'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'Components', 'LoginPage.js'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'public', 'pages', 'signup.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'public', 'pages', 'contact.html'));
});

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

