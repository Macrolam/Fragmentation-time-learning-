// 引入模块，非内置模块
let http = require("http");
// 创建服务
let sever = http.createServer(function (req,res) {
  // 设置响应
  res.writeHead(200,{"Content-type":"text/plain;charset=UTF-8"})
  res.end("this is my first response data")
})
// 设置监听端口和ip
sever.listen(2000,"127.0.0.1")