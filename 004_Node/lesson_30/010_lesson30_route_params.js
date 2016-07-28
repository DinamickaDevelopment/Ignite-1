var express = require('express'); 
var app = express(); 

// express.Router - middleware функция, позволяющая вынести маршрутизауию в отдельный модуль
var router = express.Router(); 

router.use(function(req, res) {
	switch (req.url) {
		case '/': {
			console.log('request to main page!'); 
			// res.redirect - перенаправление запроса 
			res.redirect('/view1'); 
			break; 
		}
		case '/view1': {
			console.log('view1'); 

			res.writeHead(200, {'Content-Type':'text/html'})
			res.write('<html>'); 
			res.write('<title>View 1!</title>'); 

			res.write('<head>'); 
			res.write(`<script> 

			window.onload = function() {

				function makeRequest() {
					var xhr = new XMLHttpRequest(); 
					xhr.open('GET', 'view1/' + document.getElementById("inp").value); 

					xhr.onload = function() {
						document.getElementById('output').innerHTML += this.responseText + '<br />'; 
					}; 

					xhr.send(); 
				} 


				var btn = document.getElementById('btn'); 
				btn.onclick = makeRequest; 

			}
			</script>`); 

			res.write('</head>'); 
			res.write('<body>'); 
			
			res.write('<input type="text" id="inp"/>'); 
			res.write('<input type="button" value="Make request!" id="btn" />'); 
			res.write('<h2 id="output">route params: <br /></h2>'); 

			res.write('</body>'); 
			res.write('</html>'); 
			res.end(); 
			break; 
		}
	
		default: { 
			res.writeHead(404, {'Content-Type':'text/plain'}); 
			res.end('Page not found!'); 
		}
	}
}); 

app.get('/view1/:test', function(req, res) {
		console.log('view1 with param!'); 
		// доступ к параметрам маршрутизации осуществляется через объект req.params 
		console.log(req.params.test);
		res.end(req.params.test); 
}); 

app.use(router); 

app.listen(3000, function() {
	console.log('app listening on port 3000'); 
}); 