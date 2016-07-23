const http = require('http'); 
const fs = require('fs'); 
const url = require('url'); 


const server = http.createServer(function(req, res) {

 	 // обработка ошибок запросв
 	 req.on('error', function(err) {
 	 	console.log(err); 
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

	else {
		
		res.writeHead(200, {'Content-Type': 'text/html'}); 
		res.write('<h2>Data from server!</h2>'); 
		res.end(); 

		console.log('data sent!'); 
	} 



}).listen(3000); 

console.log('server running on port 3000'); 
