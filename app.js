var artifactory = require('./artifactory.js')
var http = require('http')
var express = require('express')
var app = express()


const ACCESS_TOKEN = "AKCp2VokTFqQfV5UUja36PfcCref4qFeNPf8Xtu2JUAorcz9q9MESZABck1uwLCUHZe4TPgsG";


app.set('port', 3000);
app.use((req, res, next) => {
  res.setHeader('content-type', 'application/json');
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET");
  res.setHeader("Access-Control-Allow-Headers", "X-JFrog-Art-Api, Origin, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-Requested-By");
  next();
});


app.get('/api/storageinfo', (req, res) => {
  var artifact = artifactory.storageinfo(ACCESS_TOKEN);
  artifact.then(val => res.json(val));
})

var httpServer = http.createServer(app);
httpServer.listen(app.get('port'), () => {
    console.log("Artifactory UI Middleware:\n  => http://localhost:" + app.get('port'));
});
