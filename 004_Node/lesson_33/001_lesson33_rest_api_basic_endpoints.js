var express = require('express');
var app = express();
var router = express.Router();

// В данном приложении показана базовая логика построения RESTful API 
router.get('/:id', function (req, res) {
    res.status(200).send('get item by ID' + req.params.id + !'); 
});

router.post('/', function (req, res) {
    res.status(201).send('create item!');
});

router.put('/:id', function (req, res) {
    res.status(200).send('update item by ID' + req.params.id + '!');
});

router.delete('/:id', function (req, res) {
    res.status(200).send('remove item by ID' + req.params.id + '!');
});

app.use('/api', router); 

app.listen(3000, function () {
    console.log('app running on port 3000');
}); 