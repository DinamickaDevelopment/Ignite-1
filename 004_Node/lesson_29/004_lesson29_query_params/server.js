var http = require('http');
var url = require('url');

var port = process.env.port || 1337; 

http.createServer(function (req, res) {

    // доступ к query параметрам
    var query = url.parse(req.url, true).query;
    res.end('get params: ' + JSON.stringify(query));

}).listen(port, function () {
    console.log('Server running on port ' + port); 
});