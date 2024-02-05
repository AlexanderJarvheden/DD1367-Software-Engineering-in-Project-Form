//importerar express.js framework, app = hemsidan, port = lokal server port
const express = require('express');
const app = express();
const port = 3000;

//för frontend bilder osv om det behövs, hämtar från 'public' directory
app.use(express.static('public'));

//för att starta servern
app.listen(port, () => {
  console.log("Servern kör på http://localhost/:" + port);
});