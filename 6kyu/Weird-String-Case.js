// Problem link: https://www.codewars.com/kata/52b757663a95b11b3d00062d

// Solution:

function toWeirdCase(string){
  return string.split(' ').map((el, i) => el.split('').map((el, i) => i % 2 === 0 ? el.toUpperCase() : el.toLowerCase()).join('')).join(' ')
}