###Javascript	
---
####作用域
可以理解为范围和圈子:
张三在A互联网公司当FE，李四在B互联公司当PM
从大到小： 互联网圈子 , 程序员圈子，产品圈子，个人圈子
- Client:  Window 
- Node:   global  exports 
- 总结：
   **在顶级作用域中不能访问下一级作用域里的变量，但下一级作用域中可以访问上一级作用域中的变量**
   **在顶级的圈子活动时能同时找到张三, 李四,但在FE的圈子里面找不到李四**
####this

####apply bind call

**apply**

```javascript
Function.prototype.apply(context, args);
```
**call**
```javascript
Function.prototype.call(context, arg1,arg2,arg3,...argn);
```
**bind**
```javascript
Function.prototype.bind(context, arg1,arg2,arg3,...argn);
Function.prototype.bind = function(ctx){
	var fn = this;
	return function(ctx){
		fn.apply(ctx, arguments);
	}
}
```
####对象
**引用类型**
// extend.js
####闭包
**闭包就是能够读取其他函数内部变量的函数**

**在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁**

// 经典的例子 [涉及到时间延迟的时候使用]
```javascript
for(var i = 0; i < 10; i++){
	var ele = document.createElement('div');
    ele.innerHTML = (i + 1);

    (function(i){
      ele.onclick = function(){
        alert(i);
      }
    })(i);
    document.body.appendChild(ele);
}
```

####原型继承
object.create
//参考inherit Events模块
http://www.crimx.com/2014/07/27/javascript-inheritance/
http://www.infoq.com/cn/articles/javascript-instantiation-and-inheritance
####函数式编程 [ 回调和深层嵌套的来源 ]
**高阶函数**  (本质上: 闭包的应用 )
```
function fn(v){
	return function(){
		return v + 1;
	}
}

function test(a,b){
	return function(){
		return a + b;
	}
}
// code
Array.prototype.sort = function(a,b){
	var arr = this;
	return function(){
		
	}
}
```
**偏函数**

什么是偏函数？
假设有一个参数或变量已经预置的函数A，我们通过调用A来产生一个新的函数B，函数B就是我们说的偏函数
```
var isType = function(type){
  return function(obj){
    return toString.call(obj)=='[object '+type+']';
  }
};
var isString = isType('String');
var isFunction = isType('Function');
```


***总结和对比***
高阶函数和偏函数是异步编程的基础，熟练运用高阶函数和偏函数是非常必要的。

高阶函数

函数作为参数；
函数作为返回值；
偏函数

一个创建函数的工厂函数；
通过指定部分参数，定制新的函数；

**练习**
```
// 老师说 周六来上node课 
function say(course){
	return function(teacher){
		console.log('%s 说:周末来上 %s 课程吧!', teacher, course);
	}
}
```
####异步编程解决方案
- **发布/订阅模式**
	**异常处理**
		// 错误行为
	```
	try{
	    setTimeout(function(){
	        var data = a/1; //错误的计算
	    },1000);
	}catch (e){
		console.log(e);  // 捕获不到异常
	}
	```
	// 正确
	```
	setTimeout(function(){
	    try{
	        var data = a/1; //错误的计算
	    }catch(e){
	       console.log(e);
	    }
	},1000);
	```
	
	// 无限的callback  (为了代码的优雅 用同步?)
	```
	test1(function(v1){
	  test2(funciton(v1,function(v2){
	    test3(function(v2,fcuntion(v3){
	      test4(v3,function(v4){
	        callback(v4);
	      });
	    }));
	  }));
	});
	```


####参考资料
- 作用域和闭包: http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html
- promise源码参考: https://www.npmjs.com/package/xhr-promise
- css和js属性支持: http://caniuse.com/

####使用工具
- 百度脑图 
- 马克飞象 (markdown 可视工具) 
