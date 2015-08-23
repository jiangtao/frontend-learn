// 使用一个简单的UserModel说明ES5中Array的新增方法
var extend = function(origin, copy){
    for(var k in copy){
        if(copy.hasOwnProperty(k) ){
            origin[k] = copy[k];
        }
    }
    return origin;
}
var userModel = {
    list: [
        {
            role:'amdin',
            username: 'admin',
            name: '江涛',
            salary: 1000
        },
        {
            role:'worker',
            username: 'zhangsan',
            name: '张三',
            salary: 500
        },
        {
            role:'worker',
            username: 'lisi',
            name: '李四',
            salary: 500
        },
        {
            role:'worker',
            username: 'wangwu',
            name: '王五',
            salary: 500
        }
    ],
    isWorker: function(user){
        return user.role == 'worker';
    },
    sendMail: function(user){
        if(this.isWorker(user)){
            console.log('%s is a worker', user.name);
        }else{
            console.log('%s is not a worker', user.name);
        }
    },
    getWoker: function(){
        // filter默认有返回值 返回满足条件的项组成的数组
        return this.list.filter(function(user){
            // filter这里只需要弱等于即可
            return this.isWorker(user);
        }, this);
    },
    // 保证原有model的干净
    clone: function(){
        var results = [];
        this.list.forEach(function(user){
            results.push(extend({},user));
        });
        return results;
    },
    isAllWorker: function(){
        return this.list.every(function(user){
            return this.isWorker(user);
        }, this);
    },
    existOneWorker: function(){
        return this.list.some(function(user){
            return this.isWorker(user);
        }, this);
    }
};
// forEach(function(item,index,arr), context)
// forEach不会对原数组进行改动, arr中的item是引用类型会改变
// forEach没有返回值
userModel.list.forEach(userModel.sendMail, userModel);

// filter
var workers = userModel.getWoker();
console.log(workers);
// map如果不返回结果, 则每一项为undefined 
var payList = userModel.clone().map(function(user){
    if(this.isWorker(user)){
        user.salary *= 2;   
        return user;
    }else{
        return user;
    }
}, userModel);
console.log('payList' ,payList);
// some and every  return boolean
console.log('all worker ? ', userModel.isAllWorker());
console.log('exist one worker ? ', userModel.existOneWorker());

// indexOf, lastIndexOf
var numberArray = [1,3,4,8,10, 4, 3];
console.log(numberArray.indexOf(3));
console.log(numberArray.indexOf(3, 2)); // 表示从索引为2的开始查找 包含2
console.log(numberArray.lastIndexOf(3));
console.log(numberArray.lastIndexOf(3, 5));


// reduce 
// reduce(callback, initValue)
// callback(previous, item, index, arr)
// reduce每次返回的是减少的值
// 如果reduce第二个参数有值, 那么就从索引为1开始迭代，每次迭代返回新的previous
var summaryPayment = userModel.clone().reduce(function(previous, current, index, arr){
    // console.log(previous.salary,'###', current.salary);
    return {
        salary: previous.salary + current.salary
    };
});
console.log('summary', summaryPayment.salary)
// reduceRight是从数组末尾开始迭代