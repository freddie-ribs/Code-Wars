// Problem link: https://www.codewars.com/kata/523a86aa4230ebb5420001e1
// Solution:
function anagrams(word  , words) {
  let sortedWord = word.split('').sort().join('');
  return words.filter(w => w.split('').sort().join('') === sortedWord);
}