var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.all('/dial/', function(request, response) {
    var r = plivo.Response();

    var params = {
        'dialMusic' : "https://intense-brook-8241.herokuapp.com/custom_tone/"
    };
   
    var d = r.addDial(params);
    d.addNumber("1111111111");
    console.log (r.toXML());

    response.set({
        'Content-Type': 'text/xml'
    });
    response.end(r.toXML());

});

app.all('/custom_tone/', function(request, response) {
    var r = plivo.Response();

    r.addPlay("https://s3.amazonaws.com/plivocloud/music.mp3");
    console.log (r.toXML());

    response.set({
        'Content-Type': 'text/xml'
    });
    response.end(r.toXML());

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


/*
Sample Output
<Response>
    <Dial dialMusic="https://intense-brook-8241.herokuapp.com/custom_tone/">
        <Number>1111111111</Number>
    </Dial>
</Response> 

<Response>
    <Play>https://s3.amazonaws.com/plivocloud/music.mp3</Play>
</Response>

*/