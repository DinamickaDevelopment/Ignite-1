var restify = require('restify'),
fs = require('fs');
 
// ������ ��� ��������� �������� 
var apiHandler = require('./api_handler'); 

// �������� ������� 
var server = restify.createServer({
    name: 'myApp'
});

server.use(function(req, res, next) {

    console.log(req.method + ' ' + req.url); 
    next(); 
})

server.get('/', function (req, res) {
    res.redirect('/api', apiHandler.loadItems);
})

// ������� ��� �������� 
server.get('/api/', apiHandler.loadItems);

// ������� ����� ������� 
server.post('/api', apiHandler.createItem);

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