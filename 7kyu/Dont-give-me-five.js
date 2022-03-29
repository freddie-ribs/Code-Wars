// Problem link: https://www.codewars.com/kata/5813d19765d81c592200001a

// Solution:

function dontGiveMeFive(start, end) {
  let count = 0
  for (start; start <= end; start++) {
    if (!String(start).includes("5")) {
      count += 1
    }
  }
  return count
}