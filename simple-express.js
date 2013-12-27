var express = require('express');

var app = express.createrServer();

app.configure( function(){

});

app.get('/', function(req, res){
	res.send('Hello World');
});

app.listen(3000);