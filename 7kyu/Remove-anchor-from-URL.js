// Problem link: https://www.codewars.com/kata/51f2b4448cadf20ed0000386

// Solution

function removeUrlAnchor(url){
  const idx = url.indexOf('#');
  return idx === -1 ? url : url.slice(0, idx);
}