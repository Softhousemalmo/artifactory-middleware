var request = require('request');

module.exports = {

    // server port as int
    serverPort: function () {
        return 3000;
    },

    // api url to your artifactory as a string
    apiUrl: function () {
        return "http://artifactory.tetrapak.com/api/";
    },

    // api token to your artifactory user as a string
    apiToken: function () {
        return "AKCp2VokTFqBvRHyeQmrvQpyn52xrb3rsD2kpWFf3b5Qc8HLQMe4WeS7w41fAViFWvbUUN5vV";
    }

}