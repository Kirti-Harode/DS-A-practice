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
    let head1 = reverseLinkedList(l1);
    let head2 = reverseLinkedList(l2);
    
    let dummyHead = new ListNode(null);
    let tail = dummyHead;
    let carry = 0;
    let current1 = head1;
    let current2 = head2;
    while(current1 || current2 || carry !== 0){
        let val1 = current1 ? current1.val : 0;
        let val2 = current2 ? current2.val : 0
        
        let sum = val1 + val2 + carry;
        if(sum > 9){
            carry = 1;
            let newNode = new ListNode(sum-10);
            tail.next = newNode;
        }else{
            carry = 0;
            let newNode = new ListNode(sum);
            tail.next = newNode;
        }
        
        tail = tail.next;
        if(current1) current1 = current1.next;
        if(current2) current2 = current2.next;
        
    }
    let resultHead = reverseLinkedList(dummyHead.next);
    return resultHead;
};

const reverseLinkedList = function(head){
    let prev = null;
    let current = head;
    while(current){
        let next = current.next;
        current.next = prev;
        prev = current;
        
        current = next;
    }
    return prev;
}

// without reversing it, store in a stack
var addTwoNumbers = function(l1, l2) {
    let stack1 = [];
    let stack2 = [];
    
    let curr1 = l1;
    while(curr1){
       stack1.push(curr1.val);
        curr1 = curr1.next;
    }
    
    let curr2 = l2;
    while(curr2){
       stack2.push(curr2.val);
        curr2 = curr2.next;
    }

    
    let carry = 0;
    let dummyHead = new ListNode(null);
    let tail = dummyHead;
    while(stack1.length || stack2.length || carry !== 0){
        let val1 = stack1.length ? stack1.pop() : 0;
        let val2 = stack2.length ? stack2.pop() : 0;
        let sum = val1 + val2 + carry;
        
        if(sum > 9){
            carry = 1;
            tail.next = new ListNode(sum - 10);
        }else{
            carry = 0;
            tail.next = new ListNode(sum);
        }
        tail = tail.next;
        
    }
    let prev = null;
    let curr = dummyHead.next;
    while(curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
    
};