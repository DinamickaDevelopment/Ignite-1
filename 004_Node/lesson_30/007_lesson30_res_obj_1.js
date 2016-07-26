var express = require('express'); 
var http = require('http'); 
var app = express(); 

app.get('/', function(req, res) { 

	// res.app - свойство, содержащее ссылку на экземпляр express приложения, 
	// использующий данную midddleware функцию
	console.log(res.app); 

    // res.locals = свойство, хранящее локальные переменные данного цикла request/response
	res.locals.prop1 = 'this is a property!'; 
	console.log(res.locals.prop1); 

	console.log(res.headersSent); //res.headersSent - boolean, true, если заголовки ответа были отправлены 

	// метод res.append позволяет установить заголовки ответа 
	res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
	res.append('Warning', '199 Miscellaneous warning'); 
	// метод res.set делает то же самое 
	res.set('Cache-Control', 'no-cache'); 

	// метод attachment связывает тип данных ответа(заголовок Content-Type) с расширением указанного файла 
	// и устанавливает заголовок Content-Disposition: attachment 
	res.attachment('public/index.html'); 

	// метод cookie позволяет создавать cookies 
	res.cookie('someCookie', 'this is a cookie', {
		httpOnly: true
	}); 
	res.cookie('anotherCookie', 'this is another cookie!'); 

	// удалить cookie 
	res.clearCookie('anotherCookie'); 

	// метод, позволяеющий формировать разные ответы сервера на основе 
	// загловка запроса Accept 
	res.format({
		'text/plain': function() {
			res.send('this is a text response!'); 
		}, 

		'text/html': function() {
			res.send('<h1>This is an html response!</h1>'); 
		}, 

		'application/json': function() {
			res.send({message: 'this is a json response!'}); 
		}, 

		'default': function() {
			res.status(406).send('Not Acceptable'); 
		}

	}); 

	
}); 

var options = {
	port: 3000, 
	host: 'localhost', 
	method: 'GET', 
	path: '/?a=1',  
	headers: {'Content-Type':'text/html'}

}
http.get(options);  

app.listen(3000, function() {
	console.log('app running on port 3000'); 
}); 