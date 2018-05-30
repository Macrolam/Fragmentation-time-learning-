/*
 * @Author: 麦壳
 * @Date:  2018/5/30
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018/5/30
 * @Duty: fs 涉及到的相关同步异步问题  for里放了一堆异步语句  导致出现非预期结果
 * 解决：把异步变成同步
 */

let http = require('http')
let fs = require('fs')
let server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"})
    // 谷歌浏览器默认会处理小icon的请求
    if (req.url == '/favicon.ico') return;
    // 创建文件夹
    /*  fs.mkdir("./text/album")
     fs.mkdir("./text/aaa")
     fs.mkdir("./text/bbb")*/
    // 读取文件内容
    /*fs.readFile("./text",function (err,data) {
     if(err) throw err;// Error: EISDIR: illegal operation on a directory, read   抛出错误提示：我们在对文件夹做一个非法操作 -读
     console.log(data,"\n 读取到的文件");
     })*/

    // 读取文件夹内
    fs.readdir("./text", function (err, files) {
        /*fs.readdir(path[, options], callback)
         * files 是目录中不包括 '.' 和 '..' 的文件名的数组。
         * */
       // console.log(files, "\n 读取的文件名的数组");//[ '001.jpg', '002.jpg','003.jpg','004.jpg','005.jpg','aaa','album','bbb' ]

        let wenjianjiaArr = []
        // for- 同步
        for (var i = 0, len = files.length; i < len; i++) {
            let fileName = files[i]
            // fs.stat- 异步
            fs.stat("./text/" + fileName, function (err, stats) {
                if (stats.isDirectory()) {
                    wenjianjiaArr.push(fileName)
                    console.log(fileName);
                }
                console.log(wenjianjiaArr, "\n push进来的文件夹");
            })
        }

    })
    res.end("我是服务器返回内容")
})

server.listen(1000, "127.0.0.1")