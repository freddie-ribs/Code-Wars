// Problem link: https://www.codewars.com/kata/59cfc000aeb2844d16000075

// Solution:

function capitalize(s){
  let oddUpper = s.split("").map((el, i) => i % 2 !== 0 ? el.toUpperCase() : el).join("")
  let evenUpper = s.split("").map((el, i) => i % 2 === 0 ? el.toUpperCase() : el).join("")
  return [evenUpper, oddUpper]
};