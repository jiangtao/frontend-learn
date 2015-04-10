function _Promise(fn){
    this._status = _Promise.PENDING;
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
var prototype = _Promise.prototype;
prototype.then = function(resolve, reject){
    var promise = new _Promise();
    this._onFulfilled.push(function(val){
        var result = resolve ? resolve(val) : val;
        if(_Promise.isPromise(result)){
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
    });
    return promise;
}
prototype.resolve = function(obj){
    if(this._status == _Promise.PENDING){
        this._status = _Promise.FULLFILLED;
        for(var i = 0, len = this._onFulfilled.length; i < len; i++){
            this._onFulfilled[i](obj);
        }
    }
}
prototype.reject = function(){
    if(this._status == _Promise.PENDING){
        this._status = _Promise.REJECTED;
        for(var i = 0, len = this._onRejected.length; i < len; i++){
            this._onRejected[i](obj);
        }
    }
}
_Promise.PENDING = 0;
_Promise.FULLFILLED = 0;
_Promise.REJECTED = 0;
_Promise.isPromise = function(obj){
    return obj instanceof _Promise;
}