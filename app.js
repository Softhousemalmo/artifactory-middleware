var storage = require('./storage')
var repositories = require('./repositories')
var config = require('./config')

var http = require('http')
var express = require('express')
var app = express()


var ACCESS_TOKEN = config.apiToken();


app.set('port', config.serverPort());
app.use((req, res, next) => {
  res.setHeader('content-type', 'application/json');
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET");
  res.setHeader("Access-Control-Allow-Headers", "X-JFrog-Art-Api, Origin, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-Requested-By");
  next();
});


app.post('/api/search/:query', (req, res) => {
  var repo = repositories.search(req.params.query, ACCESS_TOKEN);
  repo.then(val => res.json(val));
})

app.get('/api/latest/build', (req, res) => {
  var repo = repositories.latestBuild(ACCESS_TOKEN);
  repo.then(val => res.json(val));
})

app.get('/api/dependencys/:sha', (req, res) => {
  var repo = repositories.dependency(req.params.sha, ACCESS_TOKEN);
  repo.then(val => res.json(val));
})

app.get('/api/repositories', (req, res) => {
  var repo = repositories.repositories(ACCESS_TOKEN);
  repo.then(val => res.json(val));
})

app.get('/api/repositoriesProperties/:repo1/:repo2/:repo3/:repo4/:repo5?properties', (req, res) => {
  var repo = repositories.repositoriesProperties(req.params.repo1, req.params.repo2, req.params.repo3, req.params.repo4, req.params.repo5, ACCESS_TOKEN);
  repo.then(val => res.json(val));
})

app.get('/api/storage', (req, res) => {
  let path = req.query.path;

  let properties = req.query.properties;
  if(properties) path+="?properties";
 
  console.log(path);

  var artifact = storage.storage(path, ACCESS_TOKEN);
  artifact.then(val => res.json(val))
  .catch(reason => res.send(reason));
})

// app.get('/api/storageSecondLevel/:repo1/:repo2', (req, res) => {
//   var repo = storage.storageSecondLevel(req.params.repo1, req.params.repo2, ACCESS_TOKEN);
//   repo.then(val => res.json(val));
// })

// app.get('/api/storageTheirdLevel/:repo1/:repo2/:repo3', (req, res) => {
//   var repo = storage.storageTheirdLevel(req.params.repo1, req.params.repo2, req.params.repo3, ACCESS_TOKEN);
//   repo.then(val => res.json(val));
// })

// app.get('/api/storageFourthLevel/:repo1/:repo2/:repo3/:repo4', (req, res) => {
//   var repo = storage.storageFourthLevel(req.params.repo1, req.params.repo2, req.params.repo3, req.params.repo4, ACCESS_TOKEN);
//   repo.then(val => res.json(val));
// })

// app.get('/api/storageArtifactLevel/:repo1/:repo2/:repo3/:repo4/:repo5', (req, res) => {
//   var repo = storage.storageArtifactLevel(req.params.repo1, req.params.repo2, req.params.repo3, req.params.repo4, req.params.repo5, ACCESS_TOKEN);
//   repo.then(val => res.json(val));
// })

var httpServer = http.createServer(app);
httpServer.listen(app.get('port'), () => {
   // console.log("Artifactory UI Middleware:\n  => http://localhost:" + app.get('port'));
});
