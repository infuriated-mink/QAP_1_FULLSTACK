var request = require('request');
var cowsay = require('cowsay');

request({
    // pulling fortune from api
    url: 'http://helloacm.com/api/fortune',
    method: 'GET'
}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(cowsay.say({
            text: body,
            // deciding on eyes for the cow.
            e: 'O-',
            // deciding on tongue for the cow. 
            T: 'U'
        }));
    } else {
        console.log('Error getting fortune and printing');
    }
});
