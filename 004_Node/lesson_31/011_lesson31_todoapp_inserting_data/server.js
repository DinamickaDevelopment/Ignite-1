var express  = require('express'); 
var app = express();

var path = require('path');
var bodyParser = require('body-parser'); 

// подключение модулей для работы с бд
var displayHandler = require(path.join(__dirname, 'js/display_handler'));
var insertHandler = require(path.join(__dirname, 'js/insert_handler')); 

// установка генератора шаблонов 
app.set('views', './pages'); 
app.set('view engine', 'ejs');

// подгрузка статических файлов из папки pages 
app.use(express.static(path.join(__dirname, 'pages')));

// middleware для обработки данных в формате JSON 
var jsonParser = bodyParser.json();
app.use(jsonParser); 

app.use(function (req, res) {

    switch (req.url) {
        case '/': {
            // обработка запроса к бд 
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
 
                // запрос к бд 
                var insertQuery = insertHandler.addRow(req.body);
            }
            break; 
        }
        default: {
            // обработа запросов к несуществующим страницам 
            res.status(404).send('page not found on this server');
            break; 
        }

    }
 
}); 



// обработка ошибок 
app.use(function(err, req, res, next) {
	if (err) console.log(err.stack); 

	res.status(500).send('oops...something went wrong'); 
}); 

app.listen(3000, function() { 

	console.log('app listening on port 3000'); 

});  
