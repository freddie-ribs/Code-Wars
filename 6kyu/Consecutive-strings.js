// Problem link: https://www.codewars.com/kata/56a5d994ac971f1ac500003e

// Solution: 

function longestConsec(strarr, k) {
  if (strarr.length === 0 || k <= 0 || k > strarr.length) {
    return ""
  }

  
  let out = ""
  for (let i = 0; i < strarr.length; i++) {
    let cur = strarr.slice(i, i + k).join("")
    if (out.length < cur.length) {
      out = cur
    }
  }
  return out
}