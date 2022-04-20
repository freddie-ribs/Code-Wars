// Problem link: https://www.codewars.com/kata/537400e773076324ab000262

// Solution:

function groupAnagrams(words){
  let out = []
  let d = {}
  
  for (let word of words) {
    let sortedWord = word.split("").sort().join("")
    if (sortedWord in d) {
      d[sortedWord].push(word) 
    } else {
      d[sortedWord] = [word]
    }
  }
  
  for (let val of Object.values(d)) {
    out.push(val)
  }
  
  return out
}