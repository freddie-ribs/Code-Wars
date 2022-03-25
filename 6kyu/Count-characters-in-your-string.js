// Problem link: https://www.codewars.com/kata/52efefcbcdf57161d4000091

// Solution:
function count (string) {  
  if (string === "") {
    return {}
  }
  let d = {}
  for (let ch of string) {
    if (ch in d) {
      d[ch] += 1
    } else {
      d[ch] = 1
    }
  }
  return d
}