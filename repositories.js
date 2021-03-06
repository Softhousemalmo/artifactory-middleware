var request = require('request');
var config = require('./config')

var apiUrl = config.apiUrl();

module.exports = {

    latestBuild: function (query, token) {
        return new Promise((resolve, reject) => {
            // Set the headers
            const headers = {
                'X-JFrog-Art-Api': token,
                'Content-Type': 'application/json; charset=UTF-8'
            }


            // Configure the request
            const options = {
                headers: headers,
                url: apiUrl + 'build',
                method: 'GET',

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

    dependency: function (sha, token) {
        return new Promise((resolve, reject) => {
            // Set the headers
            const headers = {
                'X-JFrog-Art-Api': token,
            }


            // Configure the request
            const options = {
                headers: headers,
                url: apiUrl + 'search/dependency?sha1=' + sha,
                method: 'GET',
            }


            // Start the request
            request(options, function (error, response, data) {
                if (!error && response.statusCode == 200) {
                    console.log("response for option request :  ", response);
                    var str = JSON.parse(data);
                    resolve(str);
                }
            })
        })
    },


    search: function (query, token) {
        return new Promise((resolve, reject) => {
            // Set the headers
            const headers = {
                'X-JFrog-Art-Api': token,
                'Content-Type': 'text/plain'
            }

            // Configure the request
            const options = {
                headers: headers,
                url: apiUrl + 'search/artifact?name=' + query,
                method: 'GET',

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

    repositories: function (token) {
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

}