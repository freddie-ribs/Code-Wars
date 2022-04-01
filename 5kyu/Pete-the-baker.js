// Problem link: https://www.codewars.com/kata/525c65e51bf619685c000059

// Solution

function cakes(recipe, available) {
  let count = []
  
  for (let key in recipe) {
    if (!(key in available)) {
      return 0
    } else {
      count.push(Math.floor(available[key] / recipe[key]))
    }
  }
  
  return Math.min(...count)
}