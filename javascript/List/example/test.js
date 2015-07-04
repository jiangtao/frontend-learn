var List = require('../lib/List');
var delegate = function () {
    var _this = this;
    return {
        onUpdate: function (context, oldItem, newItem) {
            console.log()
        },
        onInserted: function (context, item) {

        },
        onPush: function (context, item) {
            console.log('%s 进教室了', item);
        },
        onPop: function (context, item) {
            console.log('%s 出去了', item);
        },
        onRemoved: function (context, item) {
        },
        onSelected: function (context, item) {
        }
    }
};
var options = {
    delegate: delegate.apply(this)
};
var memberList = new List(options);

var appendList = ['张三', '李四', '王五'];
appendList.forEach(function (item, i, arr) {
    memberList.push(item);
});


