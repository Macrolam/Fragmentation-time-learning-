/*
 * @Author: 麦壳
 * @Date:  2018/6/12
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018/6/12
 * @Duty: 解构赋值
 */
/*
* 简介：
* es6 提供一种方便的写法，从数组或是对象中提取值，然后对变量进行赋值。之前赋值只能直接指定值使用 = 赋值符号。现在只要等号两侧的模式相同，赋值就会成功。
* */
// es5:
var ee = 1;
var ff = 2;
var gg = 3;
// 对应es6解构赋值的写法:
var [ee,ff,gg] = [1,2,3]
/*=====================解构赋值 begin=======================*/
var [name,age] = ["Macrolam", 26]
console.log(name, age);// Macrolam 26

var [name,...age] = ["Macrolam", 26]
console.log(name, age);// Macrolam [26]

var [...tip] = "tip001"
console.log(tip);//(6) ["t", "i", "p", "0", "0", "1"]

var {...a}= "tip002"
console.log(a);// {0: "t", 1: "i", 2: "p", 3: "0", 4: "0", 5: "2"}

var {...b} ={a: "a", b: "b"}
console.log(b);// {a: "a", b: "b"}

let [x,y,...z] = ["x"]
console.log(x, y, z); // x undefined []

// 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。
let {split: str} = 123;
console.log(str ===  Number.prototype.split); // true

let {toString: s} = 123;
console.log(s);
console.log(s === Number.prototype.toString); // true

/*let {toString: s} = true;
s === Boolean.prototype.toString // true*/

// 如果变量名与属性名不一致，必须写成下面这样。一样的话，变量名就可以省略了
let { foo: baz } = { bar: "bbb" , foo: "aaa"};
console.log(baz);
/*=====================解构赋值 end=======================*/



/*=====================...常见使用场景 begin=======================*/
let tools = {
    getDomByCssName: function () {
        console.log("getDomByCssName");
    }
}
let until = {
    version: "1.0.0",
    pattenQuery: function () {
        console.log("pattenQuery");
    }
}

/* ... 等同一个拷贝功能 */
let o = {
    ...tools,
    ...until
}
o.getDomByCssName()
o.pattenQuery()
console.log(o);
/*=====================...常见使用场景 end=======================*/