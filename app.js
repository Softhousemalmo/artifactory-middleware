var storage = require('./storage')
var repositories = require('./repositories')

var http = require('http')
var express = require('express')
var app = express()


const ACCESS_TOKEN = "AKCp2VokTFqBvRHyeQmrvQpyn52xrb3rsD2kpWFf3b5Qc8HLQMe4WeS7w41fAViFWvbUUN5vV";


app.set('port', 3000);
app.use((req, res, next) => {
  res.setHeader('content-type', 'application/json');
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET");
  res.setHeader("Access-Control-Allow-Headers", "X-JFrog-Art-Api, Origin, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-Requested-By");
  next();
});


app.get('/api/repositories', (req, res) => {
  var repo = repositories.repositories(ACCESS_TOKEN);
  repo.then(val => res.json(val));
})

app.get('/api/repositoriesProperties/:repo/', (req, res) => {
  var repo = repositories.repositoriesProperties(req.params.repo, ACCESS_TOKEN);
  repo.then(val => res.json(val));
})

app.get('/api/storage/:repo', (req, res) => {
  var artifact = storage.storage(req.params.repo, ACCESS_TOKEN);
  artifact.then(val => res.json(val));
})

app.get('/api/storageSecondLevel/:repo1/:repo2', (req, res) => {
  var repo = storage.storageSecondLevel(req.params.repo1, req.params.repo2, ACCESS_TOKEN);
  repo.then(val => res.json(val));
})

app.get('/api/storageTheirdLevel/:repo1/:repo2/:repo3', (req, res) => {
  var repo = storage.storageTheirdLevel(req.params.repo1, req.params.repo2, req.params.repo3, ACCESS_TOKEN);
  repo.then(val => res.json(val));
})

var httpServer = http.createServer(app);
httpServer.listen(app.get('port'), () => {
    console.log("Artifactory UI Middleware:\n  => http://localhost:" + app.get('port'));
});
