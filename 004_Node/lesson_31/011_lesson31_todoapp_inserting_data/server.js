var express  = require('express'); 
var app = express();

var path = require('path');
var bodyParser = require('body-parser'); 

// ����������� ������� ��� ������ � ��
var displayHandler = require(path.join(__dirname, 'js/display_handler'));
var insertHandler = require(path.join(__dirname, 'js/insert_handler')); 

// ��������� ���������� �������� 
app.set('views', './pages'); 
app.set('view engine', 'ejs');

// ��������� ����������� ������ �� ����� pages 
app.use(express.static(path.join(__dirname, 'pages')));

// middleware ��� ��������� ������ � ������� JSON 
var jsonParser = bodyParser.json();
app.use(jsonParser); 

app.use(function (req, res) {

    switch (req.url) {
        case '/': {
            // ��������� ������� � �� 
            var query = displayHandler.tableLoader.loadTable();
            query.on('end', function () {
                res.render('index', { data: displayHandler.tableLoader.tableData });
            })

            break;
        }
        case '/add': {
            res.render(path.join(__dirname, '/pages/add_item_page'));
            break; 
        }
        case '/add/newItem': {
            if (req.method == 'POST') {
 
                // ������ � �� 
                var insertQuery = insertHandler.addRow(req.body);
                insertQuery.on('end', function () {
           
                })
            }
            break; 
        }
        default: {
            // �������� �������� � �������������� ��������� 
            res.status(404).send('page not found on this server');
            break; 
        }

    }
 
}); 



// ��������� ������ 
app.use(function(err, req, res, next) {
	if (err) console.log(err.stack); 

	res.status(500).send('oops...something went wrong'); 
}); 

app.listen(3000, function() { 

	console.log('app listening on port 3000'); 

});  
