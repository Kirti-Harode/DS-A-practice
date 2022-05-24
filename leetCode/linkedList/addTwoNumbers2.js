// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:


// Input: l1 = [7,2,4,3], l2 = [5,6,4]
// Output: [7,8,0,7]
// Example 2:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [8,0,7]
// Example 3:

// Input: l1 = [0], l2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.


var addTwoNumbers = function(l1, l2) {
    if(l1 === null && l2 === null) return null;
    let head1 = reverseList(l1);
    let head2 = reverseList(l2);
    
    let dummyHead = new ListNode(null);
    let tail = dummyHead;
    let current1 = head1;
    let current2 = head2;
    let carry = 0;
    
    while(current1 !== null || current2 !== null || carry === 1){
        
        let val1 = current1 ? current1.val : 0;
        let val2 = current2 ? current2.val : 0;
        
        let sum = val1 + val2 + carry;
    
        let digit = sum;
        if(sum > 9){
            carry = 1;
           digit = sum - 10;
        }else{
            carry = 0;
        }
          tail.next = new ListNode(digit);
      
        
        tail = tail.next;
        if(current1) current1 = current1.next;
        if(current2) current2 = current2.next;
        
        
    }
    
      // console.log(carry)
    return reverseList(dummyHead.next);
};

function reverseList(head){
    let prev = null;
    let current = head;
    
    while(current !== null){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}