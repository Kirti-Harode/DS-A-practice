// zipper lists
// Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty.

// test_00:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// a.next = b;
// b.next = c;
// // a -> b -> c

// const x = new Node("x");
// const y = new Node("y");
// const z = new Node("z");
// x.next = y;
// y.next = z;
// // x -> y -> z

// zipperLists(a, x);
// // a -> x -> b -> y -> c -> z
// test_01:
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

// const x = new Node("x");
// const y = new Node("y");
// const z = new Node("z");
// x.next = y;
// y.next = z;
// // x -> y -> z

// zipperLists(a, x);
// // a -> x -> b -> y -> c -> z -> d -> e -> f
// test_02:
// const s = new Node("s");
// const t = new Node("t");
// s.next = t;
// // s -> t

// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// const four = new Node(4);
// one.next = two;
// two.next = three;
// three.next = four;
// // 1 -> 2 -> 3 -> 4

// zipperLists(s, one);
// // s -> 1 -> t -> 2 -> 3 -> 4
// test_03:
// const w = new Node("w");

// // w

// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// one.next = two;
// two.next = three;
// // 1 -> 2 -> 3 

// zipperLists(w, one);
// // w -> 1 -> 2 -> 3
// test_04:
// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// one.next = two;
// two.next = three;
// // 1 -> 2 -> 3 

// const w = new Node("w");
// // w

// zipperLists(one, w);
// // 1 -> w -> 2 -> 3

// iterative:

const zipperLists = (head1, head2) => {
    // var current1 equal to head 1
  //   var current2 to equal head2
  //   while current is not null
  //   current1.next set equal to current2
  //   current1 equal to current1.next
  //   current2.next set equal to current1
    
  //   n = length of list 1
  //   m = length of list 2 
  //   time: O(min(n, m))
  //   space: O(1)
    let tail = head1;
    let curr1 = head1.next;
    let curr2 = head2;
    let count = 0;
    
    while(curr1 !== null && curr2 !== null){
      if(count % 2 === 0) {
        tail.next = curr2;
        curr2 = curr2.next;
      }else{
          tail.next = curr1;
         curr1 = curr1.next;
      }
     
        tail = tail.next;
        count++;
      
    }
    if(curr1 !== null) tail.next = curr1;
    if(curr2 !== null) tail.next = curr2;
    return head1;
  };
  


//   recursive: 


const zipperLists = (head1, head2) => {
 
    // n = length of list 1
    // m = length of list 2
    // Time: O(min(n, m))
    // Space: O(min(n, m))
      if(head1 === null && head2 === null)  return null;
      if(head1 === null) return head2;
      if(head2 === null)  return head1;
    
      let next1 = head1.next;
      let next2 = head2.next;
      head1.next = head2;
      head2.next = zipperLists(next1,next2);
      return head1;
};