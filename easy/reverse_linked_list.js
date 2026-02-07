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
var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let next = curr.next; // 1. save next
    curr.next = prev; // 2. reverse link
    prev = curr; // 3. move prev
    curr = next; // 4. move curr
  }

  return prev;
};
