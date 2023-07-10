class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function findNthNodeFromEnd(head, N) {
  let first = head;
  let second = head;

  // Move the first pointer N nodes ahead
  for (let i = 0; i < N; i++) {
    if (first === null) {
      return -1; // N is greater than the number of nodes in the list
    }
    first = first.next;
  }

  // Move both pointers simultaneously
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  return second !== null ? second.val : -1;
}
// Example 1
// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9
const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);
head1.next.next.next.next = new ListNode(5);
head1.next.next.next.next.next = new ListNode(6);
head1.next.next.next.next.next.next = new ListNode(7);
head1.next.next.next.next.next.next.next = new ListNode(8);
head1.next.next.next.next.next.next.next.next = new ListNode(9);
console.log(findNthNodeFromEnd(head1, 2)); // Output: 8

// Example 2
// Create the linked list: 10 -> 5 -> 100 -> 5
const head2 = new ListNode(10);
head2.next = new ListNode(5);
head2.next.next = new ListNode(100);
head2.next.next.next = new ListNode(5);
console.log(findNthNodeFromEnd(head2, 5)); // Output: -1
