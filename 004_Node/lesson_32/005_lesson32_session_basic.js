var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(cookieParser());
// middleware ��� ������ � �������� 
app.use(session({
    // ���� ��� ������� cookie ������� ������ 
    secret: 'secret',
    // �����, ������� ��������� ��������� ���������� cookie �� ��������� � ������(���� �������� - true)
    saveUninitialized: true,
    // ���� true, ������ ������ ���������������� � ���������, ���� ���� � ������ �� ��������� ��������� 
    resave: false
}));

app.get('/', function (req, res) {

    // ������ � ������� ������ �������� � ������� req.session 
    console.log(req.session);

    // ������� req.session ����� �������� ��������, ������� ����� �������� � ������� ������ 
    req.session.numberOfRequests = req.session.numberOfRequests + 1;

    var requestCount = () => {
        return isNaN(req.session.numberOfRequests) ? 0 : req.session.numberOfRequests; 
    }

    res.end('Number of reguests: ' + requestCount() + 
        ' \n\r Refresh the page to increase count');
})

app.listen(3000, function () {
    console.log('app running on port 3000'); 
})