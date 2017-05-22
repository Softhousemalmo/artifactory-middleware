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
                     console.log('error storage name is =' + error);
                    reject(error);
                }
            })
        })
    },
    

    storageArtifactLevel: function(repo , token) {
        return new Promise((resolve, reject) => {
            // Set the headers
            const headers = {
                'X-JFrog-Art-Api': token
            }

            // Configure the request
            const options = {
                url: apiUrl + 'storage/' + repo ,
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
