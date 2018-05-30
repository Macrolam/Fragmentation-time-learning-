/*
 * @Author: 麦壳
 * @Date:  2018/5/30
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018/5/30
 * @Duty: 把异步变成同步
 */

let http = require('http')
let fs = require('fs')
let server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"})
    // 谷歌浏览器默认会处理小icon的请求
    if (req.url == '/favicon.ico') return;
    // 读取文件夹内
    fs.readdir("./text/", function (err, files) {
        let wenjianjiaArr = [];
        //迭代器就是强行把异步的函数，变成同步的函数-这里采用递归的做法
        //1做完了，再做2；2做完了，再做3
       (function iterate(i) {
            // 递归终止条件
            if(i == files.length){
                console.log(wenjianjiaArr,"文件夹数组：");
                return
            }
            // 递归循环做的事
            fs.stat("./text/"+files[i],function (err,stats) {
                if(stats.isDirectory()){
                    wenjianjiaArr.push(files[i])
                }
                // 递归
                iterate(i+1)
            })
        })(0)
    })
    res.end("我是服务器返回内容")
})

server.listen(1000, "127.0.0.1")