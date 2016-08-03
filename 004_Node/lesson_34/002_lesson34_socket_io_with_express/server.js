// подключение express и socket.io 
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var path = require('path'); 

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', function (socket) {
    
    // метод send автоматически генерирует событие 'message'
    socket.send('Hello world')

    // обработка события 
    socket.on('greeting', function (data) {
        console.log(data);
    });
}) 

server.listen(3000, function () {
    console.log('app running on port 3000'); 
})