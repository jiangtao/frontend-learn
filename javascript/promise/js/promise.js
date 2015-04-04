/**
 * 处理异步中的成功和失败 并且保证流程按照顺序进行
 */
var Promise = function(fn){
    var chain = this.chain = {};
    chain.state = 'pending';
    chain.thenables = [];
    if(typeof  fn == 'function'){
        fn(this.resolve.bind(this), this.reject.bind(this));
    }
}
/**
 *
 * @param resolveHandler [当前promise 成功处理方法]
 * @param rejectHandler [当前promise 失败处理方法]
 * @returns {promise} [下一个进行的操作的promise实例]
 */
Promise.prototype.then = function(resolveHandler, rejectHandler){
    var that = this;
    var promise = new Promise();
    var thenable = {
        onResolved: resolveHandler,
        onRejected: rejectHandler,
        promise: promise
    }
    that.thenables.push(thenable);
    if(that.state != 'pending'){
        
    }
    return promise;
}

// 起床 走路到车站 坐车  上课
//var getUp = function(){};
//getUp.then = function(resolve, reject){
//    setTimeout(resolve, 20 * 60 * 1000);
//};
//var toStation = function(){};
//toStation.then = function(resolve, reject){
//    setTimeout(resolve, 10 * 60 * 1000);
//};
//var taskBus = function(){};
//taskBus.then = function(resolve, reject){
//    setTimeout(resolve, 30 * 60 * 1000);
//};


