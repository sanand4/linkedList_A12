class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function isLinkedListPalindrome(head) {
  if (head === null || head.next === null) {
    return true;
  }

  let slowPtr = head;
  let fastPtr = head;
  let prevPtr = null;

  while (fastPtr !== null && fastPtr.next !== null) {
    fastPtr = fastPtr.next.next;
    prevPtr = slowPtr;
    slowPtr = slowPtr.next;
  }

  let secondHalf = slowPtr;
  prevPtr.next = null;
  let prev = null;
  let current = secondHalf;

  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  secondHalf = prev;

  lf;
  let ptr1 = head;
  let ptr2 = secondHalf;

  while (ptr1 !== null && ptr2 !== null) {
    if (ptr1.data !== ptr2.data) {
      return false; // Characters do not match, not a palindrome
    }
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  return true;
}

// Example usage:

const head = new Node("R");
head.next = new Node("A");
head.next.next = new Node("D");
head.next.next.next = new Node("A");
head.next.next.next.next = new Node("R");

// Check if the linked list is a palindrome
const isPalindrome = isLinkedListPalindrome(head);
console.log(isPalindrome); // Output: true
