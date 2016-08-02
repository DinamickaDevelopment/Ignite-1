// подключение express и socket.io 
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var path = require('path'); 

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// событие connection генерируется, когда socket.io клиент подключается к серверу
io.on('connection', function (socket) {

    // сгенерировать ошибку 
    throw new Error('bad connection!');

    console.log('user connected to socket');
    socket.emit('test');

    // событие disconnect генерируется, когда socket.io клиент отключается от сервера 
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

})

server.listen(3000, function () {
    console.log('app running on port 3000'); 
})