// Problem link: https://www.codewars.com/kata/517abf86da9663f1d2000003

// Solution
function toCamelCase(str){
  return str.replace(/[-_](.)/g, (match, ch) => ch.toUpperCase())
}