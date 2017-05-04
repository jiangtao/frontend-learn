var List = require('../lib/List')

var noop = function () { }
var success = function () { return true }
var fail = function () { return false }

var delegate = {
  'canAdd': success,
  'onUpdate': noop,
  'onInserted': noop,
  'onPush': noop,
  'onPop': noop,
  'onRemoved': noop,
  'onSelected': noop,
  'canInsert': canInsert
}

function canInsert (n) {
  for(var i in this.list){
    if(n >= this.list[i]) return false
  }
  return true
}

List.prototype.insertSmall = function(n) {
   if(this.delegate.canInsert.call(this, n)){
     this.push(n)
     return true
   } else {
     return false
   }
}

var numbers = [5, 4, 3, 2, 9]
var l = new List({
  delegate
})
numbers.forEach(n => l.push(n))

console.log(l.insertSmall(1))
console.log(l.list)

