var http = require('http');

var server = http.createServer(function (req, res) {

    var categoria = req.url;

        res.end("<html><body>Tecnologia</body></html>");
    if (categoria == '/tecnologia') {
    }
    else if (categoria == '/moda') {
        res.end("<html><body>Moda</body></html>");
    }
    else if (categoria == '/games') {
        res.end("<html><body>Games</body></html>");
    }
    else {
        res.end("<html><body>Portal de notícias</body></html>")
    }
}).listen(3000);
console.log('hello');

