var express = require('express');
var app = express();

app.get('/hello.txt',function(req, res){
	res.send('Hello World');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

app.get('/', function (req, res) {
	//hello word
   res.send('<h1>Hello world</h1>');
})
