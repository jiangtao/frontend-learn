var arr = [1,2,3];

arr.map((v, idx) => v +1 )// 使用 => 代替方法
arr.sort((a,b) => a - b)
arr.forEach(v => {
    if(v % 2 == 1){
        console.log('odd')
    }
});
arr.reduce(v => v);
/*
var object = {
	name: 'jiangtao',
	age: 25,
	friends: ['zhangsan', 'lisi', 'wangwu'],
	printFriends(){
      console.log('knows %s', this.name); // 这里的this指向的object的this
	}
}
*/
// template String
var name = 'jiangtao';
var str = `hello ${name}`; // 使用``做字符串代替传统的字符串相加
var object = `
	name: 'jiangtao'
	age: ${age}
`; 

// 变量赋值
var [a,b,c = 1] = ['a', 'b', 'c']
var {name: name, age: age, info: {sex: sex}} = getUserInfo()
var fn = ( ({info: info} ) => 
	console.log(info)) 