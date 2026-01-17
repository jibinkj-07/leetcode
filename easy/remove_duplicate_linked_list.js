/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var deleteDuplicates = function (head) {
  if (!head) return null; // empty list edge case

  let current = head;

  while (current != null && current.next != null) {
    if (current.val === current.next.val) {
      // skip the duplicate
      current.next = current.next.next;
    } else {
      current = current.next; // move forward
    }
  }

  return head;
};

const node5 = new ListNode(3, null);
const node4 = new ListNode(3, node5);
const node3 = new ListNode(2, node4);
const node2 = new ListNode(1, node3);
const node1 = new ListNode(1, node2);

const head = node1;
console.log("result", deleteDuplicates(head));
