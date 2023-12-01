class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const sourceSortedList = getPreviousNode(list1, list2);
  let referenceNode = sourceSortedList;

  while (list1 !== null || list2 !== null) {
    if (referenceNode === list1 && list1 !== null) {
      list1 = list1.next;
    } else if (referenceNode === list2 && list2 !== null) {
      list2 = list2.next;
    }

    if (referenceNode !== null) {
      referenceNode.next = getPreviousNode(list1, list2);
      referenceNode = referenceNode.next;
    }
  }

  return sourceSortedList;
}

function getPreviousNode(node1: ListNode | null, node2: ListNode | null): ListNode | null {
  if (node1 === null || node2 === null) {
    return node1 === null ? node2 : node1;
  }

  if (node1.val < node2.val) {
    return node1;
  }

  return node2;
}
