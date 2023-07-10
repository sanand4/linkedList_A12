class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function deleteMiddleNode(head) {
  if (head === null || head.next === null) {
    return null;
  }

  let slow = head;
  let fast = head;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  if (fast === null) {
    prev.next = slow.next;
  } else {
    prev.next = slow.next;
    slow = null;
  }

  return head;
}
// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Delete the middle node(s)
const newHead = deleteMiddleNode(head);

// Print the modified linked list
let current = newHead;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}
