var express  = require('express'); 
var app = express();

var path = require('path');
var bodyParser = require('body-parser'); 

// подключение модулей для работы с бд
var displayHandler = require(path.join(__dirname, 'js/display_handler')); 
var insertHandler = require(path.join(__dirname, 'js/insert_handler')); 
var editHandler = require(path.join(__dirname, 'js/edit_handler')); 

// установка генератора шаблонов 
app.set('views', './pages'); 
app.set('view engine', 'ejs');

// подгрузка статических файлов из папки pages 
app.use(express.static(path.join(__dirname, 'pages')));

// middleware для обработки данных в формате JSON 
var jsonParser = bodyParser.json();
var textParser = bodyParser.text(); 

app.use(jsonParser); 
app.use(textParser); 

app.use(function (req, res, next) {

    switch (req.url) {

        case '/': {
            // обработка запроса к бд 
            var query = displayHandler.tableLoader.loadTable({ edit: false });
            query.on('end', function () {
                res.render('index', { data: displayHandler.tableLoader.tableData, buttons: false });
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
        case '/edit': {

            var query = displayHandler.tableLoader.loadTable({ edit: true });

            query.on('end', function () {
            res.render('index', { data: displayHandler.tableLoader.tableData, buttons: true });
            })
            break; 
        }
        default: {
            next(); 
            break; 
        }
    }
 
});

// загрузка страницы для редактирования элементов 
app.get('/edit/:id', function (req, res, next) {

    var query = editHandler.findItemById(req.params.id) 

    query.on('end', function () {

        res.render('edit_item_page', {
            id: editHandler.rowData[0].id, 
            name: editHandler.rowData[0].name,
            description: editHandler.rowData[0].description,
            completed: editHandler.rowData[0].completed
        })

    }); 
});

// редактирование элемента в бд 
app.put('/edit/:id', function (req, res) {

    var query = editHandler.editItem(req.body);
    query.on('end', function () {
        res.end(); 
    })

});

// удаление элемента из бд
app.delete('/edit/:id', function (req, res) {

    var query = editHandler.removeItem(req.body);
    query.on('end', function () {
        res.end();
    })

});

// обработка ошибок 
app.use(function(err, req, res, next) {
	if (err) console.log(err.stack); 

	res.status(500).send('oops...something went wrong'); 
}); 

app.listen(3000, function() { 

	console.log('app listening on port 3000'); 

});  
