const request = require('request');
const apiUrl = 'http://artifactory.softhouse.se/artifactory/api/storageinfo';

module.exports = {

    storageinfo: function(token) {
        return new Promise((resolve, reject) => {
            // Set the headers
            const headers = {
                'X-JFrog-Art-Api': token
            }

            // Configure the request
            const options = {
                url: apiUrl,
                method: 'GET',
                headers: headers,
            }

            // Start the request
            request(options, function (error, response, data) {
                if (!error && response.statusCode == 200) {
                    var str = JSON.parse(data); 
                    console.log(str);
                    resolve(str);
                }
            })
        })
    }
}
