var request = require('request');
var config = require('./config')

var apiUrl = config.apiUrl();

module.exports = {

    storage: function(repo, token) {
        return new Promise((resolve, reject) => {
            // Set the headers
            const headers = {
                'X-JFrog-Art-Api': token
            }

            // Configure the request
            const options = {
                url: apiUrl + 'storage/' + repo,
                method: 'GET',
                headers: headers,
            }

            // Start the request
            request(options, function (error, response, data) {
                if (!error && response.statusCode == 200) {
                    var str = JSON.parse(data); 
                    console.log('the storage name is =' + str);
                    resolve(str);
                } else {
                     console.log('ellol storage name is =' + error);
                    reject(error);
                }
            })
        })
    },
    
    storageSecondLevel: function(repo1, repo2, token) {
        return new Promise((resolve, reject) => {
            // Set the headers
            const headers = {
                'X-JFrog-Art-Api': token
            }

            // Configure the request
            const options = {
                url: apiUrl + 'storage/' + repo1 + '/' + repo2 + '/',
                method: 'GET',
                headers: headers,
            }

            // Start the request
            request(options, function (error, response, data) {
                if (!error && response.statusCode == 200) {
                    var str = JSON.parse(data); 
                    resolve(str);
                }
            })
        })
    },

    storageTheirdLevel: function(repo1, repo2, repo3, token) {
        return new Promise((resolve, reject) => {
            // Set the headers
            const headers = {
                'X-JFrog-Art-Api': token
            }

            // Configure the request
            const options = {
                url: apiUrl + 'storage/' + repo1 + '/' + repo2 + '/' + repo3 + '/',
                method: 'GET',
                headers: headers,
            }

            // Start the request
            request(options, function (error, response, data) {
                if (!error && response.statusCode == 200) {
                    var str = JSON.parse(data); 
                    resolve(str);
                }
            })
        })
    },

    storageFourthLevel: function(repo1, repo2, repo3, repo4, token) {
        return new Promise((resolve, reject) => {
            // Set the headers
            const headers = {
                'X-JFrog-Art-Api': token
            }

            // Configure the request
            const options = {
                url: apiUrl + 'storage/' + repo1 + '/' + repo2 + '/' + repo3 + '/' + repo4 + '/',
                method: 'GET',
                headers: headers,
            }

            // Start the request
            request(options, function (error, response, data) {
                if (!error && response.statusCode == 200) {
                    var str = JSON.parse(data); 
                    resolve(str);
                }
            })
        })
    },

    storageArtifactLevel: function(repo1, repo2, repo3, repo4, repo5, token) {
        return new Promise((resolve, reject) => {
            // Set the headers
            const headers = {
                'X-JFrog-Art-Api': token
            }

            // Configure the request
            const options = {
                url: apiUrl + 'storage/' + repo1 + '/' + repo2 + '/' + repo3 + '/' + repo4 + '/' + repo5 + '/',
                method: 'GET',
                headers: headers,
            }

            // Start the request
            request(options, function (error, response, data) {
                if (!error && response.statusCode == 200) {
                    var str = JSON.parse(data); 
                    resolve(str);
                }
            })
        })
    }
}
