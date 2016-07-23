var http = require('http'); 

// http.Server - экземпляр EventEmitter, генерирующий следующие события: 
// 'close' - генерируется при закрытии сервера
// 'connection' - при установке соединения
// 'error' - при ошибке. событие 'close' будет сгенерировано сразу после события 'error'
// 'listening' - генерируется после успешного вызова метода server.listen 

var server = http.createServer().listen(3000);  

server.on('request',function(request, response) {

		response.writeHead(200, { 'Content-Type': 'text/html' }); 
		response.end('<h1>Hello World</h1>'); 
}); 

server.on('listening', function() {
	console.log('Server running on port 3000'); 
}); 

server.on('error', function(err){
	console.log(err); 
}); 

server.on('connection', function() {
	console.log('connected to server!')
}); 

server.on('close', function() {
	console.log('server stopped')
}); 