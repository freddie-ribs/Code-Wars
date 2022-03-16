//  Problem link https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

// Solution
snail = function(array) {
  let rb = 0
  let cb = 0
  let re = array.length - 1
  let ce = array[0].length - 1
  out = []
  
  while(rb <= re && cb <= ce) {
    for (let i = cb; i <= ce; i++) {
      out.push(array[rb][i])
    }
    rb += 1
    
    for (let i = rb; i <= re; i++) {
      out.push(array[i][ce])
    }
    ce -= 1
    
    if (rb <= re) {
      for (let i = ce; i >= cb; i--) {
        out.push(array[re][i])
      }
    re -= 1
    }
    
    if (cb <= ce) {
      for (let i = re; i >= rb; i--) {
        out.push(array[i][cb])
      }
    cb += 1
    }
  }
  return out
}