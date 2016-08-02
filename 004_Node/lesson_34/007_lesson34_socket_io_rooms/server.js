// ����������� express � socket.io 
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ������� ������������� ����
var namespace = io.of('/namespace'); 

// ����������� � ������������ ���� 
namespace.on('connection', function (socket) {
    console.log('connected to namespace');

    // � ������ ������������ ���� ����� ���� �������� ��������� �������(room) - ����� ����� � ������������ ���������  
    socket.on('btn_click', function (data) {
        if (data.btn == 1) {
            // ����������� � ������� 1
            socket.join('demo room 1');
            socket.emit('room_join', { roomname: 1 });

        } else if (data.btn == 2) {
            // ����������� � ������� 2
            socket.join('demo room 2');
            socket.emit('room_join', { roomname: 2 });
        }

        socket.on('get_greeting', function () {
            // ����� to ��������� ������������ �������, ������� ����� ���������� ��������� �������
            namespace.to('demo room 1').emit('greet', { message: 'Hello from room 1!' });
            namespace.to('demo room 2').emit('greet', { message: 'Hello from room 2!' });

            // ���� �� ������� 
            namespace.leave('demo room 1');
            namespace.leave('demo room 2');
        })
    })



})




server.listen(3000, function () {
    console.log('app running on port 3000');
})