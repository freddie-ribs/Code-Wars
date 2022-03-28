// Problem link: https://www.codewars.com/kata/544aed4c4a30184e960010f4

// Solution:

function divisors(integer) {
  let out = []
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      out.push(i)
    } 
  }
  
  return out.length !== 0 ? out : `${integer} is prime` 
};