// Problem link: https://www.codewars.com/kata/525f4206b73515bffb000b21

// Solution

function add(a, b) {
  function addZero(s1, s2) {
    while (s1.length > s2.length) {
      s2 = "0" + s2
    }
    return s2
  }
  
  if (a.length > b.length) {
    b = addZero(a, b)
  } else {
    a = addZero(b, a)
  }
  
  let arrA = a.split("")
  let arrB = b.split("")
  
  let sum = 0
  let carry = 0
  let out = []
  
  for (let i = arrA.length - 1; i >= 0; i--) {
    sum = parseInt(a[i]) + parseInt(b[i]) + parseInt(carry)
    if (sum >= 10) {
      carry = 1
      sum = sum - 10
    } else {
      carry = 0
    }
    out.push(sum)
  }
  if (carry === 1) {
    out.push(carry)
  }
  return out.reverse().join("")
}