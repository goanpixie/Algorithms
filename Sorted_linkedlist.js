//Merge two sorted linkedlist

function Node(data, next) {
  this.data = data;
  this.next = next;
}

function merge(L1, L2) {
  var L3 = new Node(null, null)
  var prev = L3;

  while (L1 !== null && L2 !== null) {
    if (L1.data <= L2.data) {
      prev.next = L1;
      L1 = L1.next;
    } else {
      prev.next = L2;
      L2 = L2.next;
    }
    prev = prev.next;
  }
  if (L1 == null) {
    prev.next = L2
  }
  if (L2 == null) {
    prev.next = L1
  }

  return L3.next;
}

var n3 = new Node(9, null);
var n2 = new Node(7, n3);
var n1 = new Node(3, n2);
L1 = n1

var r3 = new Node(10, null);
var r2 = new Node(6, r3);
var r1 = new Node(1, r2);
L2 = r1

console.log(merge(L1, L2))