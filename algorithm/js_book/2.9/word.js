var word  = {
  letters:[],
  display(){
    return this.letters
  },
  displayInReverse(){
    return this.letters.reverse()
  }
}

word.letters = 'hello world'.split('')

console.log(word.display())

console.log(word.displayInReverse())