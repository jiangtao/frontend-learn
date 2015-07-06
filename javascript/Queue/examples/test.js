var fs = require('fs');
var Queue = require('../lib/Queue');
// 获取name殊绝
var nameContent = fs.readFileSync('./data.txt').toString();
var delegate = function () {
    return {
        onShift: function (context, item) {
        },
        onPush: function (context, item) {
        }
    }
};
var maleQueue = new Queue({
    delegate: delegate.apply(this),
    namespace: 'male'
});
var femaleQueue = new Queue({
    delegate: delegate.apply(this),
    namespace: 'male'
});
// 格式化data的数据为数组
var nameList = nameContent.split('\n');

// 性别为男 女的分别加入到自己的队列
nameList.forEach(function (item, i, arr) {
    var itemArr = item.split(/\s+/);
    var name = itemArr[0];
    var sex = itemArr[1];
    if (sex == '男') {
        maleQueue.push({name: name, sex: 'male'});
    } else if (sex == '女') {
        femaleQueue.push({name: name, sex: 'female'});
    }
});

// 配对  先入先出原则
var matchList = [];
while (!maleQueue.isEmpty() && !femaleQueue.isEmpty()) {
    var male = maleQueue.shift();
    var female = femaleQueue.shift();
    console.log(male,female)
    matchList.push({
        male: male,
        female: female
    });
}
console.log('剩男 %j', maleQueue.display());
console.log('剩女 %j', femaleQueue.display());
