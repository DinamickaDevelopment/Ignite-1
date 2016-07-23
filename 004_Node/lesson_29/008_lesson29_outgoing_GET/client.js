var http = require('http');

// Параметры создаваемого запроса 
var options = {
   host: 'localhost',
   port: '3000',
   path: '/index.html'  
}; 

// Callback используеися для обработки ответа 
var callback = function(response){
   // Записывать данные в body по мере поступления 
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // Данные полностью получены 
      console.log(body);
   });
} 

// сделать запрос на сервер 
var req = http.request(options, callback);
req.end();