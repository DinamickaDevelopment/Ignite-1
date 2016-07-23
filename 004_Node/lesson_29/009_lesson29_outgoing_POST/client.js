var http = require('http');

// данные для передачи с POST запросом
var postData = 'This is sample POST data!'; 

// Параметры создаваемого запроса 
var options = {
   host: 'localhost',
   port: '3000', 
   method: 'POST', 
   headers: {'Content-Type': 'text/plain' } 

}; 


// сделать запрос на сервер 
var req = http.request(options, (res) => {

  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

  res.setEncoding('utf8');

  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });

  res.on('end', () => {
    console.log('No more data in response.');
  });

});

req.write(postData); // запись данных в тело запроса 
req.end();