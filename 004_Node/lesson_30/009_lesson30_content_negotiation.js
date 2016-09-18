var express = require('express'); 
var http = require('http'); 
var app = express(); 

app.get('/test', function(req, res) {

	// метод res.format позволяет формировать разные ответы сервера на основе загловка запроса Accept 
	res.format({
		'text/plain': function() {
			console.log('text response'); 
			res.send('this is a text response!'); 
		}, 

		'text/html': function() { 
			console.log('html response'); 
			res.send('<h1>This is an html response!</h1>'); 
		}, 

		'application/json': function() {
			console.log('json response'); 
			res.send({message: 'this is a json response!'}); 
		}, 

		'default': function() {
			console.log('error'); 
			res.status(406).send('Not Acceptable'); 
		}

	}); 

}); 



app.listen(3000, function() {
	console.log('app running on port 3000'); 
	
	// конфигурация запроса
	var options = {
	port: 3000, 
	host: 'localhost', 
	method: 'GET', 
	path: '/test',  
	// заголовок Accept
	headers: {'Accept':'application/json'}

} 

// отправка запроса
http.get(options);  

})
