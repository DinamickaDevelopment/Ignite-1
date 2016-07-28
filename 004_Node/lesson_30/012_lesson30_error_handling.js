var express = require('express'); 
var app = express(); 

app.use(function(req, res, next) {
	if (req.url == '/') {
		res.send('Hello'); 
	} else {
		next(); 
	}
}); 

app.use(function(req, res, next) {
	if (req.url == '/forbidden') {
		next(new Error('access denied!')); 
	} else {
		next(); 
	}
}); 

app.use(function(req, res, next) {
	if (req.url == '/test') {
		res.send('Test'); 
	} else {
		next(); 
	}
}); 

app.use(function(req, res, next) {
	next(new Error('page not found!')); 
})

// если у middleware функции 4 аргумента, express воспринимает ее как обработчик ошибок 
app.use(function(err, req, res, next) { 

	res.status(500).send('Ooops...Something went wrong!'); 
	
	console.log(err.stack); 
	next(err); 
});  

app.listen(3000, function() {
	console.log('app listening on port 3000'); 
}); 