// remove node
// Write a function, removeNode, that takes in the head of a linked list and a target value as arguments. The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. If the target appears multiple times in the linked list, only remove the first instance of the target in the list.

// Do this in-place.

// You may assume that the input list is non-empty.

// You may assume that the input list contains the target.

// test_00:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// // a -> b -> c -> d -> e -> f

// removeNode(a, "c");
// // a -> b -> d -> e -> f
// test_01:
// const x = new Node("x");
// const y = new Node("y");
// const z = new Node("z");

// x.next = y;
// y.next = z;

// // x -> y -> z

// removeNode(x, "z");
// // x -> y
// test_02:
// const q = new Node("q");
// const r = new Node("r");
// const s = new Node("s");

// q.next = r;
// r.next = s;

// // q -> r -> s

// removeNode(q, "q");
// // r -> s
// test_03:
// const node1 = new Node("h");
// const node2 = new Node("i");
// const node3 = new Node("j");
// const node4 = new Node("i");

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;

// // h -> i -> j -> i

// removeNode(node1, "i");
// // h -> j -> i
// test_04:
// const t = new Node("t");

// // t

// removeNode(t, "t");
// // null


const removeNode = (head, targetVal) => {
//   set current
//   if head is target val then just return head.next
//   set prev to head
//   currrent to head.next
//   while current is not null
//   if any val is target then point prev to current.next 
//   set prev to current
//   set current to current.next
  
//   time: O(n)
//   space: O(1)
    if(head.val === targetVal) return head.next;
    let current = head.next;
    let prev = head;
    while(current !== null){
        if(current.val === targetVal){
        prev.next = current.next;
        break;
        }
        prev = current;
        current = current.next;
    }
    return head;
};


const removeNode = (head, targetVal) => {
  
    // recursively: time & space : O(n)
    if(head === null) return null;
    if(head.val === targetVal) return head.next;
    head.next = removeNode(head.next, targetVal);
    return head;
}
