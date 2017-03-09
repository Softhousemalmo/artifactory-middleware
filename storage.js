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
                    resolve(str);
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
    }
}
