// Problem link: https://www.codewars.com/kata/554ca54ffa7d91b236000023

// Solution
function deleteNth(arr,n){
  let d = {}
  let out = []
  
  for (let num of arr) {
    if (!(num in d)) {
      d[num] = 1
      out.push(num)
    }
    else {
      if (d[num] < n) {
        d[num] += 1
        out.push(num)
      }
    }
  }
  return out
}