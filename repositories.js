const request = require('request');
const apiUrl = 'http://artifactory.tetrapak.com/api/';

module.exports = {

    repositories: function(token) {
        return new Promise((resolve, reject) => {
            // Set the headers
            const headers = {
                'X-JFrog-Art-Api': token
            }

            // Configure the request
            const options = {
                url: apiUrl + 'repositories',
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

    repositoriesProperties: function(repo, token) {
        return new Promise((resolve, reject) => {
            // Set the headers
            const headers = {
                'X-JFrog-Art-Api': token
            }

            // Configure the request
            const options = {
                url: apiUrl + 'storage/' + repo + '?properties',
                method: 'GET',
                headers: headers,
            }

            console.log(options);

            // Start the request
            request(options, function (error, response, data) {
                var str = JSON.parse(data); 
                resolve(str);
            })
        })
    }
}