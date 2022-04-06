// Problem link: https://www.codewars.com/kata/525d50d2037b7acd6e000534

// Solution 

Array.prototype.square = function() {
  return this.map(e => e * e)
}

Array.prototype.cube = function() {
  return this.map(e => e * e * e)
}

Array.prototype.average = function() {
  let sum = this.reduce((p, c) => p + c, 0)
  let len = this.length 
  let avg = sum / len
  return len ? avg : NaN
}

Array.prototype.sum = function() {
  return this.reduce((p,c) => p + c, 0)
}

Array.prototype.even = function() {
  return this.filter(e => e % 2 === 0)
}

Array.prototype.odd = function() {
  return this.filter(e => e % 2 === 1)
}