//importera expres.js bibliotek, app är själva sidan och port är plats i servern
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('choose_teams backend-server:))');
  });

//kör node choose_teams.js i terminalen och gå till http://localhost:3000 för att se output
app.listen(PORT, () => {
    console.log('den här är servern finns på http://localhost:' + PORT);
});

//vi behöver välja en databas, rekomenderar MongoDB eftersom den funkar bra med node js

