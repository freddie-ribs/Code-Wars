// Problem link: https://www.codewars.com/kata/585d7d5adb20cf33cb000235

// Solution
function findUniq(arr) {
  let d = {}
  
  for (let n of arr) {
    if (!(n in d)) {
      d[n] = 1
    } else {
      d[n] += 1
    }
  }
  
  for (let i = 0; i < arr.length; i++) {
    if(d[arr[i]] === 1) {
      return arr[i]
    }
  }
}