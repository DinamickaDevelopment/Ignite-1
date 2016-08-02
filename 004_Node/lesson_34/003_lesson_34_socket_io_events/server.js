// ����������� express � socket.io 
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var path = require('path'); 

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

var counter = 0;

// ������� connection ������������, ����� socket.io ������ ������������ � �������
io.on('connection', function (socket) {
    console.log('user connected to socket');
    // ��������� ������� test 
    socket.emit('test', {
        counter: counter++
    });

    // ������� disconnect ������������, ����� socket.io ������ ����������� �� ������� 
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

}) 

server.listen(3000, function () {
    console.log('app running on port 3000'); 
})