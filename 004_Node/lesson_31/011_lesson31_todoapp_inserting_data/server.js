var express  = require('express'); 
var app = express();

var path = require('path');
var bodyParser = require('body-parser'); 

// ����������� ������� ��� ��������� �������� 
var displayHandler = require('./js/displayhandler'); 
var insertHandler = require('./js/inserthandler'); 

// ��������� ���������� �������� 
app.set('views', './pages'); 
app.set('view engine', 'ejs');

// ��������� ����������� ������ �� ����� pages 
app.use(express.static(path.join(__dirname, 'pages')));

// middleware ��� ��������� ������ � ������� JSON 
var jsonParser = bodyParser.json();
var textParser = bodyParser.text(); 

app.use(jsonParser); 
app.use(textParser); 

// ��������� ������� � ���������� 
app.get('/', displayHandler.displayItems);

// �������� �������� ��� �������� ������ �������� 
app.get('/add', insertHandler.loadAddPage); 
// �������� ����� ������� 
app.post('/add/newItem', insertHandler.addRow); 

// ��������� ������ 
app.use(function(err, req, res, next) {
	if (err) console.log(err.stack); 

	res.status(500).send('oops...something went wrong'); 
}); 

app.listen(3000, function() { 

	console.log('app listening on port 3000'); 

});  
