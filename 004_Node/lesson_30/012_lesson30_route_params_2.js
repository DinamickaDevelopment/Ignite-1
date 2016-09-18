var express = require('express'); 
var app = express(); 
var path = require('path')

app.use('/:id', function(req, res, next) {
	next(); 
})

// метод app.param позволяет вынести работу с параметрами маршрутизации в отдельный модуль 
app.param('id', function(req, res){ 
	var text = 'param: ' + req.params.id; 
	console.log(text); 
	res.send(text); 
})

app.listen(3000, function() {
	console.log('app listening on port 3000'); 
}); 