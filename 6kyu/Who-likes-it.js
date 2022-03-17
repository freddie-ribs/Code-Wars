// Problem link: https://www.codewars.com/kata/5266876b8f4bf2da9b000362

// Solution:

function likes(names) {
  let textEndSingular = "likes this"
  let textEndPlural = "like this"
  if (names.length === 0) {
    return `no one ${textEndSingular}`
  } else if (names.length === 1) {
    return `${names[0]} ${textEndSingular}`
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} ${textEndPlural}`
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} ${textEndPlural}`
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others ${textEndPlural}`
  }
}