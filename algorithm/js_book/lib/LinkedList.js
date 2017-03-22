
function createNode(e){
  return {
    e: e,
    next: null
  }
}
function LinkedList() {
  this.head = createNode('head')
}
LinkedList.prototype = {
  constructor: LinkedList,
  insert(e, posEle) {
    this.find(posEle).next = createNode(e)
    return true
  },
  remove(ele) {
    var cur = this.find(ele)
    var pre = this.find(ele)
    pre.next = cur.next
  },
  findPre(ele){
    var cur = this.head
    while(cur.next && cur.next.e != ele) {
      cur = cur.next
    }
    return cur
  },
  display(){
    var cur = this.head
    var records = [cur.e]
    while(cur.next){
      records.push(cur.next.e)
      cur = cur.next
    }
    return records
  },
  find(ele) {
    // head --> a --> b --> c
    var cur = this.head
    while(cur && cur.e !== ele){
      cur = cur.next
    }
    return cur
  }
}

module.exports = LinkedList
