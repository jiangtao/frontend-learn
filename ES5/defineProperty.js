'use strict';
var obj = {};
Object.defineProperty(obj, 'language', { // 这里是属性的特性设置
    // get: function(){
    //     return 'javascript';
    // },
    // set: function(name){
    //     console.log(name, 'is setted');
    // },
    value: 'javascript',
    configurable: false, // 当delete obj.language的时候使用
    writable: true,
    enumerable: false // 当可枚举属性为false的时候 for in 和 Object.keys都得不到属性
    // 当设置get的时候 writable和value设置时候会引起错误
});
console.log(obj);
console.log(Object.keys(obj));
for(var k in obj){
    console.log('k', k);
}
console.log(obj.language);
// obj.language = 'php';
console.log('查看属性特性', Object.getOwnPropertyDescriptor(obj, 'language'));
// delete obj.language