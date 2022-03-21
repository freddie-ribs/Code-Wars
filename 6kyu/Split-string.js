// Problem link: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

// Solution:
function solution(str){
   let out = []
   let strArr = str.split("")
   for (let i = 0; i < strArr.length; i += 2) {
     out.push(str.slice(i, i + 2))
   }
  return out.map(el => el.length !== 1 ? el : el + "_")
}