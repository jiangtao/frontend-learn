function Student(){
  this.result = []
}
Student.prototype = {
  average(){
    var len = this.result.length
    if(len == 0) return 0
    return this.result.reduce((cur, pre) => cur + pre, 0) / len
  },
  addResult(v){
    this.result.push(v)  
  }
}


var a = new Student()
a.addResult(88)
a.addResult(91)
a.addResult(88)

