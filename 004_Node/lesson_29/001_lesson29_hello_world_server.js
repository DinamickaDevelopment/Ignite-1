var http = require('http');

// функция createServer возвращает новый экземпляр http.Server. 
// в качестве аргумента принимает функцию-обработчик запроса 
http.createServer(function (request, response) {

	// указание заголовков ответа
    response.writeHead(200, { 'Content-Type': 'text/html' });
    // завершить конфигурацию ответа 
    response.end('<h1>Hello World</h1>');

}).listen(3000); // слушать порт 3000

console.log('Server running on port 3000!'); 
