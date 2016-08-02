var restify = require('restify'); 

var http = require("http"),
    url = require("url"),
    path = require("path"), 
    fs = require('fs'); 

// ������ ��� ��������� �������� 
var apiHandler = require('./api_handler'); 

// �������� ������� 
var server = restify.createServer({
    name: 'myApp'
});

// middleware ��� ��������� ���� ������� 
server.use(restify.bodyParser({ mapParams: true }));

server.use(function(req, res, next) {

    console.log(req.method + ' ' + req.url); 
    next(); 
})

server.get('/', function (req, res) {
    fs.readFile(path.join(__dirname,'index.html'),"utf8", function(err, file) {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.write(err + "\n");
            res.end();
            return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(file);
        res.end();
  })
})

// ������� ��� �������� 
server.get('/api', apiHandler.loadItems);

// ������� ����� ������� 
server.post('/api', apiHandler.createItem);

// ����������� ������� � ��������� ID
server.get('/api/:id', apiHandler.getItemById);

// �������� ������� �� ID 
server.put('/api/:id', apiHandler.updateItem);

// ������� ������� �� ID 
server.del('/api/:id', apiHandler.removeItem);  
 
// ���������� ������ 
server.on('InternalServer', function(err) {
    err.body = 'oops...error'; 
    res.send(err); 
})

server.listen(3000, function () {
    console.log('server running on port 3000');
});