// ����������� express � socket.io 
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ������������ ���� � socket.io ��������� � ������� ������� io.of('namespace_name') 
var namespace = io.of('/namespace'); 

// ����������� � �������� ������������ socket.io 
namespace.on('connection', function (socket) {
    console.log('connected to namespace');

    // ��������� ������� greet 
    namespace.emit('greet', { message: 'Hello from namespace!' });

}) 



server.listen(3000, function () {
    console.log('app running on port 3000');
})