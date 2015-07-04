'use strict';

var checkDeleteFunction = function (delegate) {
    var checkList = [
        'onUpdate',
        'onInserted',
        'onPush',
        'onPop',
        'onRemoved',
        'onSelected'
    ];
    for (var i = 0, len = checkList.length; i < len; i++) {
        var func = checkList[i];
        if (!delegate[func] || typeof delegate[func] !== 'function') {
            console.warn('%s not implement', func);
        }
    }
};

var List = function (options) {
    this.listSize = 0;
    this.list = [];
    this.pos = 0;
    this.delegate = options.delegate;
    checkDeleteFunction(this.delegate);
};

var prototype = List.prototype;
prototype.indexOf = function (item) {
    for (var i = 0; i < this.length; i++) {
        if (this.list[i] === item) {
            return i;
        }
    }
    return -1;
};
prototype.push = function (item) {
    this.list[this.listSize++] = item;
    this.delegate.onPush(this, item);
};
prototype.pop = function () {
    var item = this.list.pop();
    this.listSize--;
    this.delegate.onPop(this, item);
};
prototype.insert = function (insertItem, afterItem) {
    var index = this.indexOf(afterItem);
    if (index > -1) {
        this.list.splice(index + 1, 0, insertItem);
        this.listSize--;
        this.delegate.onInserted(this, insertItem);
        return true;
    }
    return false;
};
prototype.remove = function (item) {
    var index = this.indexOf(item);
    if (index > -1) {
        this.list.splice(index, 1);
        this.delegate.onRemoved(this, item);
        return true;
    }
    return false;
};
prototype.update = function (oldItem, newItem) {
    var index = this.indexOf(oldItem);
    if (index > -1) {
        this.list[index] = newItem;
        this.delegate.onUpdate(this, oldItem, oldItem);
        return true;
    }
    return false;
};
prototype.select = function (item) {
    var index = this.indexOf(item);
    if (index > -1) {
        this.pos = index;
        this.delete.onSelected(this, item);
        return true;
    }
    return false;
};
prototype.getItem = function (index) {
    return this.list[index];
};
prototype.first = function () {
    return this.getItem(0);
};
prototype.end = function () {
    return this.getItem(this.length - 1);
};
prototype.print = function () {
    for (var i in this.list) {
        console.log(i, this.list[i]);
    }
};
prototype.empty = function () {
    this.listSize = 0;
    this.list.length = 0;
};
prototype.contains = function (item) {
    return this.indexOf(item) > -1;
};
prototype.getCurrentPosition = function () {
    return this.pos;
};
prototype.length = function () {
    return this.listSize;
};

module.exports = List;