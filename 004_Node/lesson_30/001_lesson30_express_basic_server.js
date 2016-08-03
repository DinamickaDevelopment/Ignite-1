var express = require('express');
var app = express();

// middleware 
app.use(function (req, res) {
    res.send('Hello from express!');
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
}); 
