let arr = [1,2,3];

arr.map((v, idx) => v +1 )// 使用 => 代替方法
arr.sort((a,b) => a - b)
arr.forEach(v => {
    if(v % 2 == 1){
        console.log('odd')
    }
});
arr.reduce(v => v);
/*
let object = {
	name: 'jiangtao',
	age: 25,
	friends: ['zhangsan', 'lisi', 'wangwu'],
	printFriends(){
      console.log('knows %s', this.name); // 这里的this指向的object的this
	}
}
*/
// template String
let name = 'jiangtao';
let age = 10;
let str = `hello ${name}`; // 使用``做字符串代替传统的字符串相加
let object = `
	name: 'jiangtao'
	age: ${age}
`;

// 变量赋值
let [a,b,c = 1] = ['a', 'b', 'c']
let getUserInfo = data => data;
let {name: nickName, age: nickAge, info: {sex: sex}} = getUserInfo()
// 函数内部变量设置
// XXX: 当想Fn返回info的时候 报错
let fn = ( ({info: _info} ) =>
	console.log(info))

let func = function(a,b=10){
	return a + b
}
// 参数传递
// 默认参数设置初始值
let funcTest = (a,b=10) => a+b
let funcMoreAguments = (x, ...y) => x * y.length
// 传递个数组来作为参数
let funcArrayArgs = (a, b) => b.concat(a)