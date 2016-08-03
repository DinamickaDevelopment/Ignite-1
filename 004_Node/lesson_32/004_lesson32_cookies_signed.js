var express = require('express');
var http = require('http');
var app = express();

// подключение модуля cookie-parser
var cookieParser = require('cookie-parser');

// если cookieParser принимает в качестве аргумента строку, она используется 
// для генерации  подписи cookie
app.use(cookieParser('this is a secret!!!'))

app.get('/', function (req, res) {

    res.cookie('cookie2', 'DemoSignedCookie', {
        expires: new Date(Date.now() + 900000),
        httpOnly: true,
        // создание cookie с подписью 
        signed: true
    })

    // доступ к подписанным cookie через свойство req.signedCookies
    res.end(req.signedCookies.cookie2);

    res.on('end', function () {
        http.get('http://localhost:3000');
    })

    console.log('Cookies: ', req.signedCookies)
})

app.listen(3000, function () {
    console.log('app running on port 3000');
})