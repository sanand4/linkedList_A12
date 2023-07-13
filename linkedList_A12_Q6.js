class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function retainMDeleteN(head, M, N) {
  if (head === null || M <= 0 || N <= 0) {
    return head; // Return the original list if invalid parameters
  }

  let current = head;
  let prev = null;

  while (current !== null) {
    // Retain M nodes
    let retainCount = 0;
    while (current !== null && retainCount < M) {
      prev = current;
      current = current.next;
      retainCount++;
    }

    // Delete N nodes
    let deleteCount = 0;
    while (current !== null && deleteCount < N) {
      current = current.next;
      deleteCount++;
    }

    // Connect the last retained node with the next node after N nodes
    prev.next = current;
  }

  return head;
}

// Example usage:

// Create the linked list
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

// Retain M nodes and delete N nodes
const M = 2;
const N = 2;
const modifiedList = retainMDeleteN(head, M, N);

// Print the modified linked list
let currentNode = modifiedList;
while (currentNode !== null) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}
