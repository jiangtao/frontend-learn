global.name = 'javascript';
var _get = function(){
    console.log('#####')
    return this.name;
};
var obj = {
    name: 'js'
};
var Course = function(options){
    this.name = options.name || 'unkown';
};
var prototype = Course.prototype;
prototype.constructor = Course;
var course = new Course({name: 'JAVASCRIPT'});
var callName1 = _get.call();
var callName2 = _get.call(obj);
var callName3 = _get.call(course);
var applyName1 = _get.apply();
var applyName2 = _get.apply(obj);
var applyName3 = _get.apply(course);
// call
console.log('callName1 %s', callName1);
console.log('callName2 %s', callName2);
console.log('callName3 %s', callName3);

// apply
console.log('applyName1 %s', applyName1);
console.log('applyName2 %s', applyName2);
console.log('applyName3 %s', applyName3);

// bind
var bindName2 = _get.bind(obj);
console.log('bindName2 %s', bindName2());
var bindName3 = _get.bind(course);
console.log('bindName3 %s', bindName3());