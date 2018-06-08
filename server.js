//Install express server
const express = require('express');
const path = require('path');
console.log("INIT");
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + './dist/ChercheAnimaux'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'./dist/ChercheAnimaux/index.html'));
});
console.log(process.env.PORT);
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);