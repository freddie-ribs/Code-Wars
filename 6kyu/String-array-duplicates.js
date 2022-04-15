// Problem link: https://www.codewars.com/kata/59f08f89a5e129c543000069

// Solution:

function dup(s) {
  let out = [] 
  for (let i = 0; i < s.length; i++) {
    let arr = s[i].split("")
    let j = 0
    let tmp = ""
    while (j < arr.length) {
      if (arr[j] !== arr[j + 1]) {
        tmp += arr[j]
      }
      j += 1
    }
    out.push(tmp)
  }
  return out
}