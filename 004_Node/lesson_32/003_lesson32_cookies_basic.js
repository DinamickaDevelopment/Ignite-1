var express = require('express');
var http = require('http'); 
var app = express();

// ����������� ������ cookie-parser
var cookieParser = require('cookie-parser');

// cookieParser middleware 
app.use(cookieParser())

app.get('/', function (req, res) {
    //����� res.cookie ��������� ��������� cookies � �������������� �����������
    res.cookie('cookie1', 'Hello', {
        // ���� ����� cookie
        expires: new Date(Date.now() + 900000),
        // ������ cookie ��������� ������ ��� ������� 
        httpOnly: true
    })

    // ������ � cookie ����� �������� req.cookies 
    res.end(req.cookies.cookie1);

    res.on('end', function () {
        http.get('http://localhost:3000'); 
    })

    console.log('Cookies: ', req.cookies)
})

    app.listen(3000, function () {
        console.log('app running on port 3000');
 })