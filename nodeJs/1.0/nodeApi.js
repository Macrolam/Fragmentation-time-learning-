/*
 * @Author: 麦壳
 * @Date:  2018/5/30
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018/5/30
 * @Duty: req.url fs
 */
let http = require('http')
let fs = require('fs')
let server =  http.createServer(function (req,res) {
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"})
    // 谷歌浏览器默认会处理小icon的请求
    if(req.url == '/favicon.ico') return ;
    // 创建文件夹，回调是不用传递的。我们仅仅是创建而已
    fs.mkdir("./text",function (err,data) {
        console.log(err,data,"创建文件夹完毕！");
    })
    // 在执行文件的 开发 写入 读取 前需要检测文件类型
    fs.stat("./text",function(err,stats){
        if(stats.isDirectory()) console.log("这是一个文件夹");
    })
    res.end("我是服务器返回内容")
})

server.listen(1000,"127.0.0.1")