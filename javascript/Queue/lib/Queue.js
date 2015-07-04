'use strict';

var checkDeleteFunction = function (delegate) {
    var checkQueue = [
        'onPush',
        'onPop'
    ];
    for (var i = 0, len = checkQueue.length; i < len; i++) {
        var func = checkQueue[i];
        if (!delegate[func] || typeof delegate[func] !== 'function') {
            console.warn('%s not implement', func);
        }
    }
};

var Queue = function (options) {
    this.queue = [];
    this.delegate = options.delegate;
    checkDeleteFunction(this.delegate);
};

var prototype = Queue.prototype;
prototype.init = function () {
};
prototype.indexOf = function (item) {
    for (var i = 0; i < this.length; i++) {
        if (this.queue[i] === item) {
            return i;
        }
    }
    return -1;
};
prototype.push = function (item) {
    this.queue.push(item);
    this.delegate.onPush(this, item);
};
prototype.pop = function () {
    var item = this.queue.pop();
    this.delegate.onPop(this, item);
};
prototype.first = function () {
    return this.getItem(0);
};
prototype.end = function () {
    return this.getItem(this.length - 1);
};
prototype.print = function () {
    for (var i in this.queue) {
        console.log(i, this.queue[i]);
    }
};
prototype.empty = function () {
    this.queue = [];
};
prototype.isEmpty = function () {
    return this.length === 0;
};
prototype.length = function () {
    return this.queue.length;
};

(function (root, factory) {
    if (root == module.exports) {
        module.exports = factory;
    } else if (define && define.amd) {
        define(function () {
            return factory
        });
    } else {
        root[factory.name] = factory;
    }

})(this, Queue);