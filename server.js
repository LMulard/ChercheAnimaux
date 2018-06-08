//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname +'/dist/ChercheAnimaux'));

app.get('/*', function(req,res) {
    
res.sendFile(__dirname +'/dist/ChercheAnimaux/index.html');
});


app.listen(process.env.PORT || 8080);