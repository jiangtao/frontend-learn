function Weather() {
  var months = 12
  this.store = []
}
// m 为months的索引
// w 为weeks的索引
Weather.prototype = {
  addMonth(m){
    this.store.push(m)
  },
  averageMonth(m) {
    var averageWeeks = this.store[m]
      .filter(weeks => weeks && weeks.length)
      .map(weeks => this.average(weeks))
      return this.average(averageWeeks) 
  },
  totalMonth(m) {
    var totalWeeks = this.store[m]
      .filter(weeks => weeks && weeks.length)
      .map(weeks => this.total(weeks))
      return this.total(totalWeeks) 
  },
  averageWeek(m, w) {
    return this.average(this.store[m][w])
  },
  totalWeek(m, w) {
    return this.total(this.store[m, w])
  },
  /**
   * 计算一维数组的和
   * @param {Array} array 
   */
  sum(array) {
    if (Array.isArray(array)) {
      return array.reduce((pre, cur) => pre + cur, 0)
    } else {
      throw new TypeError('sum args not array')
    }
  },
  average(array) {
    if (Array.isArray(array)) {
      if (array.length == 0) return 0
      return this.sum(array) / array.length
    } else {
      throw new TypeError('average args not array')
    }
  }
}

var w = new Weather()
w.addMonth([
  [20,10],
  [20,22,23,24,26,30,23],
  [20,22,23,24,26,30,23]
])
console.log(w.store)
console.log(w.averageMonth(0))
console.log(w.averageWeek(0,0))