// 参考资料: http://www.zuojj.com/archives/1089.html
// Object.create
function Point(coord){
    this.x = coord.x;
    this.y = coord.y;
}
Point.prototype.move = function(x, y){
    this.x += x;
    this.y += y;
    console.log('point moved');
    console.log(this.x , this.y);
};

function Rectangle(){
    Point.apply(this, arguments);
};
Rectangle.prototype = Object.create(Point.prototype, {
    delete:  {
        writable: false,
        configurable: false,
        enumerable: true,
        value: function(rectangle){
            console.log('delete rectangle');
            return true;
        }
    }
});
var rect = new Rectangle({x: 100, y: 100});
rect.move(5, 5);
console.log(rect.delete());

if(typeof Object.create != 'function'){
    Object.create = function(o){
        var F = new Function();
        F.prototype = o;
        return F;
    }
}