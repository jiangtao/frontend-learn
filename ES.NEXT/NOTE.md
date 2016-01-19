---
> 经测试，发现babel6有一些错误，暂且换成babel5.8.3版本
> 产生的原因: babel6在webpack config需要 配置babel-plugin-transform-runtime，导致报错！

**babel6相关记录:**

> 在nodejs可以直接用babel编译无问题， 而在浏览器中则需要webpack/browserify.


**记录关于babel6的issues:**

- [How could I use async/await in browser with babel6](https://github.com/babel/babel-loader/issues/161)

**参考文献:**
- [Using ES6 and ES7 in the Browser, with 
Babel 6 and Webpack](http://jamesknelson.com/using-es6-in-the-browser-with-babel-6-and-webpack/)


