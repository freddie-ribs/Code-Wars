// Problem link: https://www.codewars.com/kata/55beec7dd347078289000021

// Solution

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  if (head === null) {
    return 0
  }
  let tail = head
  let size = 1
  while (tail.next !== null) {
    tail = tail.next
    size += 1
  }
  return size
}

function count(head, data) {
  if (head === null) {
    return 0
  }
  
  if (head.next === null) {
    return head.next === data ? 1 : 0
  }
  
  let count = 0
  
  while (head !== null) {
    if (head.data === data) {
      count += 1
    }
    head = head.next
  }
  return count
}