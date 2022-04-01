// Problem link: https://www.codewars.com/kata/52449b062fb80683ec000024

// Solution

function generateHashtag (str) {
  let modifiedStr = str.split(" ").map(el => el.slice(0, 1).toUpperCase() + el.slice(1)).join("") 
  if (modifiedStr.length >= 140 || modifiedStr === "") {
    return false
  }
  return "#" + modifiedStr
}