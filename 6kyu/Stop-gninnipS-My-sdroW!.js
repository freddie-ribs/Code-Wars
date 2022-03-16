// Problem link: https://www.codewars.com/kata/5264d2b162488dc400000001

// Solution
function spinWords(string){
  let words = string.split(/[ ,]+/)
  let out = []
  
  for (let word of words) {
    if (word.length >= 5) {
      out.push(word.split("").reverse().join(""))
    } else {
      out.push(word)
    }
  }
  return out.join(" ")
}