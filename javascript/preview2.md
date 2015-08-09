
###目录
> -  列表
> -  Promise运用及原理
> -  队列

**抽象数据模型**   `Abstract Data Type`

>为什么需要了解抽象数据类型？
>当业务需求确定，数据层类似的业务过多， 程序员需要把业务抽象成一定的数据类型，转成可执行，可扩展的业务代码。

####列表 
**为什么要抽象出这种数据类型？** 
实例： 书籍列表， 电影列表，成员列表，购物清单列表，待办事项列表 等等
共性？

例子：群成员列表模拟（server）,  购物车模拟（broswer）

**委托/委派模式**
> **理解：**委托其他类做事情而自己不做或者只做一部分工作
> **用途：**常用来解耦，保证代码可维护，可扩展
> **缺点：**代码量增加 

**补充:** `事件处理`
参考资料：http://segmentfault.com/q/1010000000130046 



####异步编程解决方案
- 跟时间有关系的都可以看作异步操作
- Javascript中的异步:
    - XMLHttpRequest
    - Image Load
    - script Load
    - setTimeout
    - Dom Ready
    - Events
    - requestAnimationFrame
    - WebRTC
    - 其他

- Node中的异步
    - 流操作 ( file, http, stream, db )

- 函数编程带来的问题

	**异常处理**
	```
    	// 错误行为
    	try{
    	    setTimeout(function(){
    	        var data = a/1; //错误的计算
    	    },1000);
    	}catch (e){
    		console.log(e);  // 捕获不到异常
    	}
   

    	// 正确
    	
    	setTimeout(function(){
    	    try{
    	        var data = a/1; //错误的计算
    	    }catch(e){
    	       console.log(e);
    	    }
    	},1000);
 

    	// 无限的callback  (为了代码的优雅 用同步?)
    	
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
- 异步编程解决方案
	- **Events**
	- **Promise**
	- **合理的设计**

#####使用Promise组织代码

> 新版Node里面已支持Promise， 可以happy的编码了！！

目标：
> - 理解异步javascript怎样工作，包含回调，事件，线程
> - 学习用Promise如何组织回调代码，确保每一步可读， 可维护
> - 当在真实的应用时， 检查 设想的情况和方法
> - 在第三方库和jquery中使用Promise
> - 了解Promise怎么处理异步中的错误
> - 探索ES6中Promise相关的代码

####队列 ( 综合 )
> 队列是只允许在一端进行插入操作，另一个进行删除操作的线性表，队列是一种先进先出（First-In-First-Out，FIFO）的数据结构

操作: `入队` `出队` 
例子:   通过队列保证提交数据不丢失（workQueue, uploadQueue）

目标：
> - 使用promise组织异步代码
> - 使用队列保证数据上传正常，数据不丢失
> - 涉及到存储操作
