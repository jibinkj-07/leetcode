function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let a = headA;
  let b = headB;

  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }

  return a;
};

const node5 = new ListNode(5, null);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(8, node4);
const node2 = new ListNode(1, node3);

const node1 = new ListNode(4, node2);

const node8 = new ListNode(1, node3);
const node7 = new ListNode(6, node8);

const node6 = new ListNode(5, node7);

console.log(getIntersectionNode(node1, node6));
