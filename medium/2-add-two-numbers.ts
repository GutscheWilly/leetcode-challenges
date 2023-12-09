export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

type Carry = 0 | 1;

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carry: Carry = 0): ListNode | null {
  if (l1 === null && l2 === null && carry === 0) {
    return null;
  }

  let sum = sumValues(l1, l2) + carry;

  if (sum > 9) {
    sum -= 10;
    carry = 1;
  } else if (carry === 1) {
    carry = 0;
  }

  return new ListNode(sum, addTwoNumbers(getNext(l1), getNext(l2), carry));
}

function sumValues(l1: ListNode | null, l2: ListNode | null): number {
  const getValue = (l: ListNode | null): number => l === null ? 0 : l.val;
  return getValue(l1) + getValue(l2);
}

function getNext(l: ListNode | null): ListNode | null {
  return l === null ? null : l.next;
}
