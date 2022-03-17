// Problem link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

// Solution
function duplicateCount(text){
  let lText = text.toLowerCase()
  let count = 0
  let d = {}
  for (let i = 0; i < lText.length; i++) {
    if (lText[i] in d) {
      d[lText[i]] += 1
    } else {
      d[lText[i]] = 1
    }
  }
  
  for (let [key, val] of Object.entries(d)) {
    if (val > 1) {
      count += 1
    }
  }
  
  return count
}