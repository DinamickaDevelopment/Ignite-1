// ����������� express � socket.io 
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var path = require('path'); 

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', function (socket) {
    
    // �������� ������ ������� 
    socket.emit('data', { message: 'data from server' }); 

    // ������������� ��������� ������ �������� 
    socket.on('response', function (data) {
        console.log(data.message);
    });
}) 

server.listen(3000, function () {
    console.log('app running on port 3000'); 
})