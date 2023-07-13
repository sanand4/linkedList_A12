class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function detectAndRemoveLoop(head) {
  if (head === null || head.next === null) {
    return; // No loop if the list is empty or contains a single node
  }

  let slowPtr = head;
  let fastPtr = head;

  // Detect loop using Floyd's Cycle-Finding Algorithm
  while (fastPtr !== null && fastPtr.next !== null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;

    if (slowPtr === fastPtr) {
      break; // Loop detected
    }
  }

  // No loop present if fastPtr reaches the end
  if (fastPtr === null || fastPtr.next === null) {
    return;
  }

  // Move slowPtr to the head and keep fastPtr at the meeting point
  slowPtr = head;
  while (slowPtr.next !== fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next;
  }

  // Remove the loop by setting the next pointer of the last node to null
  fastPtr.next = null;
}

// Example usage:

// Create the linked list with a loop
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = head.next; // Create a loop

// Detect and remove the loop
detectAndRemoveLoop(head);

// Print the modified linked list
let currentNode = head;
while (currentNode !== null) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}
