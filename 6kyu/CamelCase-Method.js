// Problem link: https://www.codewars.com/kata/587731fda577b3d1b0001196

// Solution 

String.prototype.camelCase=function(){
  return this.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')
}