function reverseLinkList (head) {
  var starting_node = head;
  var prev = null;
  
  while(starting_node) {
    var save_next_node = starting_node.next; // 6
    starting_node.next = prev; // 4
    prev = starting_node; // 4
    starting_node = save_next_node; // 6
  }
  return prev;
}

var head = {
  value: 4,
  next: {
    value: 5,
    next: {
      value: 6,
      next: null
    }
  }
}

var linkedlist = reverseLinkList(head);
console.log(linkedlist)