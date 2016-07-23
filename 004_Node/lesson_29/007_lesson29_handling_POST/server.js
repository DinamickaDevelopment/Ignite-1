const http = require('http'); 
const fs = require('fs'); 
const url = require('url'); 


const server = http.createServer(function(req, res) {

	 var body = ''; 

 	 // обработка ошибок запросв
 	 req.on('error', function(err) {
 	 	console.log(err); 
 	 }); 
 	 // получение данных POST запроса 
 	 req.on('data', function(data) {

 	 	body = data.toString(); 

 	 	// создание тела ответа 
 	 	res.writeHead(200, {'Content-Type': 'text/html'}); 
		res.write(body); 
		res.end(); 

		console.log('data sent!'); 

 	 });  


	var path = url.parse(req.url).pathname; 

	if (path.substr(1) != 'request') {

		// чтение файла по указанному пути 
		// метод substr удаляет первый символ пути('/')  
		fs.readFile(path.substr(1),  function(err, data) { 

			// обработчик ошибок
			if (err) {

				console.log(err); 
				res.writeHead(404, {'Content-Type': 'text/plain'}); 
				res.write('Not Found!'); 

			} else {

				res.writeHead(200, {'Content-Type': 'text/html'}); 
				// записать в овет содержимое читаемого файла 
				res.write(data.toString()); 

			} 

			res.end();  
		})
	} 

}).listen(3000); 

console.log('server running on port 3000'); 
