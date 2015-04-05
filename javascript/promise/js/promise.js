function Promise(fn){
    this._status = Promise.PENDING;
    this._onFulfilled = [];
    this._onRejected = [];
    var self = this;
    var resolve = function(val){
        self.resolve(val);
    };
    var reject = function(val){
        self.reject(val);
    };
    if(typeof fn == 'function'){
        fn(resolve, reject);
    }
}
var prototype = Promise.prototype;
prototype.then = function(resolve, reject){
    var promise = new Promise();
    this._onFulfilled.push(function(val){
        var result = resolve ? resolve(val) : val;
        if(Promise.isPromise(result)){
            result.then(function(val){
                promise.resolve(val);
            })
        }else{
            promise.resolve(result);
        }
    });
    this._onRejected.push(function(val){
        var result = reject ? reject(val) : val;
        promise.reject(result);
    })
    return promise;
}
prototype.resolve = function(obj){
    if(this._status == Promise.PENDING){
        this._status = Promise.FULLFILLED;
        for(var i = 0, len = this._onFulfilled.length; i < len; i++){
            this._onFulfilled[i](obj);
        }
    }
}
prototype.reject = function(){
    if(this._status == Promise.PENDING){
        this._status = Promise.REJECTED;
        for(var i = 0, len = this._onRejected.length; i < len; i++){
            this._onRejected[i](obj);
        }
    }
}
Promise.PENDING = 0;
Promise.FULLFILLED = 0;
Promise.REJECTED = 0;
Promise.isPromise = function(obj){
    return obj instanceof Promise;
}