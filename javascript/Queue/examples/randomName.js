var prefix_name = '赵钱孙李王张陈徐';
var suffix_name = '亮明红玲灵铮冰';
var list = [];

var randomName = function () {
    var prefix = prefix_name[parseInt(Math.random() * (prefix_name.length))];
    var suffix = suffix_name[parseInt(Math.random() * suffix_name.length)];
    return prefix + suffix;
};
var generateNameList = function () {
    while (list.length < 30) {
        var name = randomName();
        if (list.indexOf(name) == -1) {
            list.push(name);
        }
    }
    return list;
};
module.exports = generateNameList();
