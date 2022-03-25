// Problem link: https://www.codewars.com/kata/5839edaa6754d6fec10000a2

// Solution
function findMissingLetter(array) {
  for (let i = 0; i < array.length; i++) {
    let cur = array[i]
    let next = array[i + 1]
    if (next.charCodeAt() - cur.charCodeAt() !== 1) {
      return String.fromCharCode(cur.charCodeAt() + 1)
    }
  } 
}