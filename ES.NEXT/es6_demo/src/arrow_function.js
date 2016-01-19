import {wait} from './base_promise';
var obj = {
    count: 10
};
function Counter() {
    this.count = 0;
    this.add = (d) => {
        return setTimeout(() => {
            // this关键字与父级共享
            console.log('this', this);
            console.log('increase', ++this.count);
        }, d);
    };
    this.get = () => this.count;
}
var counter = new Counter();
counter.add();
// 不改变this指向
console.log('change this', counter.get.call(obj));

var f = (...args) => {
    console.log(args.constructor); // Array
    return args;
};
console.log(f(1,2,[3,4]));
var F = () => {
};
console.log(typeof F); // function
console.log(F.constructor) // [Function: Function]
console.log(new F) // TypeError: () => {} is not a constructor




