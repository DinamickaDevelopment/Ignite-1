var restify = require('restify'),
fs = require('fs');

// �������� ������� 
var server = restify.createServer({
    name: 'myApp'
});

// middleware �������, ������������ � restify, ��������� �� �� ���������, ��� � � express 
server.use(function (req, res, next) {

    console.log('method: ' + req.method + '\n\r' + 'url: ' + req.url );  
    next(); 
})

// ��������� get ������� 
server.get('/', function (req, res, next) {
    res.send('This is a server created with restify!');

});

// ��������� post ������� 
server.post('/', function (req, res, next) {
    res.send('This is a server created with restify!');

});


server.use(function () {
    res.send(404); 
})

server.listen(3000, function () {
    console.log('server running on port 3000'); 
});