class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function hasLoop(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
// Example 1
// Create the linked list: 1 -> 3 -> 4
const head1 = new ListNode(1);
head1.next = new ListNode(3);
head1.next.next = new ListNode(4);
// Create a loop by connecting the last node to the second node
head1.next.next.next = head1.next;
console.log(hasLoop(head1)); // Output: true

// Example 2
// Create the linked list: 1 -> 8 -> 3 -> 4
const head2 = new ListNode(1);
head2.next = new ListNode(8);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(4);
console.log(hasLoop(head2)); // Output: false
