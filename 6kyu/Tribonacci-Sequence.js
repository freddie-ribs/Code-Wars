// Problem link: https://www.codewars.com/kata/556deca17c58da83c00002db

// Solution
function tribonacci(signature,n){
  if (n < 0) {
    return []
  }
  const list = [...signature]
  for (let i = 0; i < n; i++) {
    list.push(list.slice(i, i + 3).reduce((pre, cur) => pre + cur, 0))
  }  
  return list.slice(0, -3)
}