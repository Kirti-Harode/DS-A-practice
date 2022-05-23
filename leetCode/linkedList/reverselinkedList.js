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

var reverseList = function(head) {
    
//     make a prev var assign it to null initially
//     set currrent to null
//     while current is not null
//     set current's next to prev
//     set current to its next 
//     set prev to its next
//     return prev at the end
    
    let prev = null;
    let current = head;
    while(current !== null){
        let next = current.next;
        current.next = prev;
        
        prev = current;
        current = next;
    }
    return prev;
};

// n  = num of nodes
// time: O(n)
// space: O(1)


const reverseList = (head, prev = null) => {
  
    if(head === null) return prev;
    let next = head.next;
    head.next = prev;
    return reverseList(next, head);
  
};

// n  = num of nodes
// time: O(n)
// space: O(n)