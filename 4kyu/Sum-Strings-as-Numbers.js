// Problem link: https://www.codewars.com/kata/5324945e2ece5e1f32000370

// Solution:

function sumStrings(a,b) { 
  if (a === "") {
    a = 0
  }
  
  if (b === "") {
    b = 0
  }
  let ans = BigInt(a) + BigInt(b)
  return String(ans)
}