### 由于babel6不太稳定，暂且换成babel5.8.3版本

### babel6相关记录

> babel6中 await async需要添加babel-polyfill来做兼容处理,
如果在浏览器里面使用的话, 会报错: require not defined.
所以使用webpack require不存在的问题

在NodeJS中可直接使用

一些issues:

[How could I use async/await in browser with babel6](https://github.com/babel/babel-loader/issues/161)

参考文献:
- [Using ES6 and ES7 in the Browser, with 
Babel 6 and Webpack](http://jamesknelson.com/using-es6-in-the-browser-with-babel-6-and-webpack/)

