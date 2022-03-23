// Problem link: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

// Solution
function high(x){
  let arr = x.split(" ")
  let sums = arr.map(word => [...word].reduce((pre, cur) => {
    let sum = pre + cur.charCodeAt(0) - 96
    return sum
  }, 0))
  let maxSumIdx = sums.indexOf(Math.max(...sums))
  return arr[maxSumIdx]
}