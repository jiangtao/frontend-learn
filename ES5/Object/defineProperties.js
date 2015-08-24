'use strict';
var obj = {};
Object.defineProperties(obj, {
    'language' : {
        set : function(v){
            console.log(this, 'v', 'setted');
        },
        get : function(){
            return 'javascript';
        }
    },
    'teacher' : {
        value : {
            name : 'zhangsan',
            age  : 32
        } ,
        configurable : false,
        writable     : false,
        enumerable   : true
    },
    'students' : {
        value : [
            {
                name : 'st1',
                age  : 23
            },
            {
                name : 'st2',
                age  : 24
            },
            {
                name : 'st3',
                age  : 25
            }
        ],
        configurable : true,
        writable     : true,
        enumerable   : true
    }
});
console.log(obj);
// 获取可枚举的属性名称
console.log(Object.keys(obj));
// 获取所有的属性名称
console.log(Object.getOwnPropertyNames(obj));
// enumerable false， 判断是否是自己的属性
console.log(obj.hasOwnProperty('language'));
for(var k in obj){
    console.log('k', k);
}
console.log(obj.language);
// obj.language = 'php';
console.log('language查看属性特性', Object.getOwnPropertyDescriptor(obj, 'language'));
console.log('teacher查看属性特性', Object.getOwnPropertyDescriptor(obj, 'teacher'));
console.log('students查看属性特性', Object.getOwnPropertyDescriptor(obj, 'students'));


// 测试hasOwnProperty
var arr = [1,2,,3,,,,,];
console.log('arr', arr.hasOwnProperty(0));
console.log('arr', arr.hasOwnProperty(arr.length - 1));

var object = {name: undefined};
console.log('object', object.hasOwnProperty('name'));
