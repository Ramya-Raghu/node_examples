var plivo = require('plivo-node');
var p = plivo.RestAPI({
  authId: 'Your AUTH_ID',
  authToken: 'Your AUTH_TOKEN'
});

var params = {
    'src': '1111111111', // Sender's phone number with country code
    'dst' : '2222222222<3333333333', // Receiver's phone Number with country code
    'text' : "Hi, message from Plivo" // Your SMS Text Message
};

p.send_message(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});

/*
Sample Output

Status:  202
API Response:
 { api_id: 'd00f3964-134c-11e5-b483-22000afb8d0a',
  message: 'message(s) queued',
  message_uuid: 
   [ '2619c783-e089-4d78-b39c-970a6bee5ffb',
     '8ce49fa8-547b-48d2-8eeb-98f5365884c3' ] }
*/