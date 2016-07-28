var express  = require('express'); 
var app = express(); 
var path = require('path');

// подключение модуля для работы с бд
var dbHandler = require(path.join(__dirname,'js/db_handler')); 

// установка генератора шаблонов 
app.set('views', './pages'); 
app.set('view engine', 'ejs');

// подгрузка статических файлов из папки pages 
app.use(express.static(path.join(__dirname, 'pages'))); 

app.use(function (req, res) {

    switch (req.url) {
        case '/': {
            // обработка запроса к бд 
            var query = dbHandler.tableLoader.loadTable();
            query.on('end', function () {
                res.render('index', { data: dbHandler.tableLoader.tableData });
            })

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
