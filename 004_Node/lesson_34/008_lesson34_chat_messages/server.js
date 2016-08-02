// подключение express и socket.io 
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var path = require('path');

// массив для хранения текущих подключений 
var connections = [];

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/client.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'client.js')); 
});

// установка соединения
io.on('connection', function (socket) {

    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length); 

    // окончание соединения 
    socket.on('disconnect', function (data) {
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets connected', connections.length); 
    })

    socket.on('send message', function (data) {
        // сгенерировать событие chat message и отправить его всем доступным подключениям 
        io.sockets.emit('chat message', data); 
    })
})

server.listen(3000, function () {
    console.log('app running on port 3000');
})