// Problem link: https://www.codewars.com/kata/520b9d2ad5c005041100000f

// Solution:

function pigIt(str){
  return str.split(" ")
    .map(el => el.match(/^[a-z0-9]+$/i) ? el.slice(1) + el.slice(0, 1) + "ay" + " " : el)
    .join("")
    .trim()
}