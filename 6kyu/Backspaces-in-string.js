// Problem link: https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

// Solution

function cleanString(s) {
  let out = ""
  let p = s.length - 1
  let skip = 0
  while (p >= 0) {
    if (s[p] === "#") {
      skip += 1
      p -= 1
    } 
    else if (skip > 0) {
      skip -= 1
      p -= 1
    } else {
      out += s[p]
      p -= 1
    }
  }
  return out.split("").reverse("").join("")
}