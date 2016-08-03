// подключение express и socket.io 
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var path = require('path'); 

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', function (socket) {
    
    // отправка данных клиенту 
    socket.emit('data', { message: 'data from server' }); 

    // подтверждение получения данных клиентом 
    socket.on('response', function (data) {
        console.log(data.message);
    });
}) 

server.listen(3000, function () {
    console.log('app running on port 3000'); 
})