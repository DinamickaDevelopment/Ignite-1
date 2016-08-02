var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser'); 

// ����������� ������ ��� ��������� �������� 
var apiHandler = require('./api_handler');

// middleware ��� ��������� ������ �������� � ������� JSON 
app.use(bodyParser.json()); 

// middleware ��� ������������� CORS 
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var router = express.Router(); 

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html')); 
})

// �������� ���� ��������� �� �� 
router.get('/', apiHandler.loadItems) 

// ����� ��������
router.get('/:id', apiHandler.getItemById);

// �������� �������� 
router.post('/new', apiHandler.createItem);

// ���������� �������� (��������������) 
router.put('/:id', apiHandler.updateItem);

// �������� �������� 
router.delete('/:id', apiHandler.removeItem); 

app.use('/todos', router); 

app.listen(3000, function () {
    console.log('app running on port 3000'); 
})