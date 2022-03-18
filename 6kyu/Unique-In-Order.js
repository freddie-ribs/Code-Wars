// Problem link: https://www.codewars.com/kata/54e6533c92449cc251001667

// Solution:
var uniqueInOrder=function(iterable){
    let out = [];

    for(let i = 0; i < iterable.length; i++){
       if (iterable[i] != iterable[i + 1]){
           out.push(iterable[i]);
       }
    }
    return out;
};