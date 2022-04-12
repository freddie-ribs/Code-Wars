// Problem link: https://www.codewars.com/kata/5b39e3772ae7545f650000fc

// Solution:

function removeDuplicateWords (s) {
  let wordSet = new Set(s.split(" "))
  return Array.from(wordSet).join(" ")
}