/*连写*/
require('http').createServer(function (req, res) {
    res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"})
    res.end("hahah")
}).listen(8888, "127.0.0.1")