// Problem link: https://www.codewars.com/kata/542c0f198e077084c0000c2e

// Solution:
function getDivisorsCnt(n){
  let out = 0
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      out += 1
    }
  }
  return out
}