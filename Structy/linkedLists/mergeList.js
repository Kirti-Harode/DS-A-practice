// merge lists
// Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. The function should merge the two lists together into single sorted linked list. The function should return the head of the merged linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty and contain increasing sorted numbers.

// test_00:
// const a = new Node(5);
// const b = new Node(7);
// const c = new Node(10);
// const d = new Node(12);
// const e = new Node(20);
// const f = new Node(28);
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// // 5 -> 7 -> 10 -> 12 -> 20 -> 28

// const q = new Node(6);
// const r = new Node(8);
// const s = new Node(9);
// const t = new Node(25);
// q.next = r;
// r.next = s;
// s.next = t;
// // 6 -> 8 -> 9 -> 25

// mergeLists(a, q);
// // 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28 
// test_01:
// const a = new Node(5);
// const b = new Node(7);
// const c = new Node(10);
// const d = new Node(12);
// const e = new Node(20);
// const f = new Node(28);
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// // 5 -> 7 -> 10 -> 12 -> 20 -> 28

// const q = new Node(1);
// const r = new Node(8);
// const s = new Node(9);
// const t = new Node(10);
// q.next = r;
// r.next = s;
// s.next = t;
// // 1 -> 8 -> 9 -> 10

// mergeLists(a, q);
// // 1 -> 5 -> 7 -> 8 -> 9 -> 10 -> 10 -> 12 -> 20 -> 28 
// test_02:
// const h = new Node(30);
// // 30

// const p = new Node(15);
// const q = new Node(67);
// p.next = q;
// // 15 -> 67

// mergeLists(h, p);
// // 15 -> 30 -> 67

const mergeLists = (head1, head2) => {
    // check head1's val and head2's val which is smaller and save 
    // it to a var and return that at the end
    // while both are not null
    // check next nodes and find min
    // add them next
    // if any not null then set next heads
      
    // n = length of list 1
    // m = length of list 2
    // Time: O(min(n, m))
    // Space: O(1)
      
      let current1 = head1;
      let current2 = head2;
      let dummy = new Node(null);
      let tail = dummy;
      while(current1 !== null & current2 !== null){
        if(current1.val < current2.val){
          tail.next = current1;
          current1 = current1.next
        }else{
          tail.next = current2;
          current2 = current2.next
        }
        tail = tail.next;
        if(current1 === null) tail.next = current2;
        if(current2 === null) tail.next = current1;
      }
      return dummy.next;
};

// recursively:

const mergeLists = (head1, head2) => {
  
    //   n = length of list 1
    // m = length of list 2
    // Time: O(min(n, m))
    // Space: O(min(n, m))
      if(head1 === null && head2 === null) return null;
      if(head1 === null) return head2;
      if(head2 === null) return head1;
      
      if(head1.val < head2.val){
        let next1 = head1.next;
        head1.next = mergeLists(next1, head2)
        return head1;
      }else{
        let next2 = head2.next;
        head2.next = mergeLists(head1, next2)
        return head2;
      }
    };
    