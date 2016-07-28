var express  = require('express'); 
var app = express(); 
var path = require('path');

// ����������� ������ ��� ������ � ��
var dbHandler = require(path.join(__dirname,'js/db_handler')); 

// ��������� ���������� �������� 
app.set('views', './pages'); 
app.set('view engine', 'ejs');

// ��������� ����������� ������ �� ����� pages 
app.use(express.static(path.join(__dirname, 'pages'))); 

app.use(function (req, res) {

    switch (req.url) {
        case '/': {
            // ��������� ������� � �� 
            var query = dbHandler.tableLoader.loadTable();
            query.on('end', function () {
                res.render('index', { data: dbHandler.tableLoader.tableData });
            })

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
