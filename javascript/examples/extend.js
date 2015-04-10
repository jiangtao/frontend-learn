var obj = {
    name: 'zfpx',
    coursor: {
        node: {
            cycle: 5,
            room: 1015
        },
        js: {
            cycle: 5,
            room: 416
        }
    }
};
function extend(origin,add, deep){
    if(!add || typeof add != 'object') {
        return origin
    }
    var keys = Object.keys(add);
    var i = keys.length;
    while(i--){
        origin[keys[i]] = add[keys[i]];
    }
    if(!deep){
        return origin;
    }else{
        var res = {};
        for(var k in origin){
            res[k] = origin[k];
        }
        return res;
    }
}
var obj1 = {name: 'zzz'};
var newObj1 = extend(obj1, obj, false);
var newObj2 = extend(obj1, obj, true);
obj1.name = 'xxx';
console.log(newObj1);
console.log(newObj2);