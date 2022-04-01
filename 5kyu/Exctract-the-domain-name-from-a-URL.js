// Problem link: https://www.codewars.com/kata/514a024011ea4fb54200004b

// Solution

function domainName(url){
  url = url.replace(/https?\:\/\//, "")
  url = url.replace("www.", "")
  let out = ""
  for (let ch of url) {
    if (ch !== ".") {
      out += ch
    } else {
      break
    }
  }
  return out
}
