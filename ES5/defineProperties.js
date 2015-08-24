'use strict';
var obj = {};
Object.defineProperties(obj, {
    'language': {
        set: function(v){
            console.log(this, 'v', 'setted');
        },
        get: function(){
            return 'javascript';
        }
    },
    'teacher': {
        value: {
            name: 'zhangsan',
            age: 32
        } ,
        configurable: false,
        writable: false,
        enumerable: true
    },
    'students': {
        value: [
            {
                name: 'st1',
                age: 23
            },
            {
                name: 'st2',
                age: 24
            },
            {
                name: 'st3',
                age: 25
            }
        ],
        configurable: true,
        writable: true,
        enumerable: true
    }
});
console.log(obj);
console.log(Object.keys(obj));
for(var k in obj){
    console.log('k', k);
}
console.log(obj.language);
// obj.language = 'php';
console.log('language查看属性特性', Object.getOwnPropertyDescriptor(obj, 'language'));
console.log('teacher查看属性特性', Object.getOwnPropertyDescriptor(obj, 'teacher'));
console.log('students查看属性特性', Object.getOwnPropertyDescriptor(obj, 'students'));


