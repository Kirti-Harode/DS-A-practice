// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
 

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?


var reverseList = function(head) {
    let current = head;
    let prev = null;
    while(current){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev
};

var reverseList = function(head, prev=null) {
    if(head === null) return prev;
       let next = head.next;
       head.next = prev;
      return reverseList(next, head);
};