/*
 * @Author: 麦壳
 * @Date:  2018/5/29
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018/5/29
 * @Duty: node 安装包安装好后，即可以写node代码了。这里启动一个node服务器。
 */
// 引入模块，非内置模块
let http = require("http");
// 创建服务
let sever = http.createServer(function (req,res) {
    //req表示请求，request;  res表示响应，response
    //设置HTTP头部，状态码是200，文件类型是html，字符集是utf8
  res.writeHead(200,{"Content-type":"text/plain;charset=UTF-8"})
  res.end("this is my first response data")
})
// 运行服务器-设置监听端口和ip
sever.listen(2000,"127.0.0.1")

/*
* 相关说明：
* Content-Type：文件类型，用于指引浏览器以什么形式读取该文档。
* text/plain：文本类型, plain-有“平”的意思。
* text/html:超文本类型
* text/javascript:js
* text/css:css
* application/json:json 一般做前后分离项目，接口以json传递时候的 内容类型设置于此。
* image/png:png
* image/jpg:jpg
*
* 环境变量作用：在系统的任何目录下，都能运行c:\program files\nodejs里面的程序，即这个文件夹中的node.exe就能够在任何盘符运行。等同给这个程序的 .exe 取个快捷方式，指针。
* */