
// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

// Example 1:


// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:


// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]
 

// Constraints:

// The number of nodes in the list is in the range [1, 5 * 104].
// 1 <= Node.val <= 1000


//new Linkedlist
var reorderList = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    let reverseHead = reverseList(slow);

    let dummyHead = new ListNode(null);
    let tail = dummyHead;
    let current1 = head;
    let current2 = reverseHead;
    let count = 1;
    while(current1 && current2){
        if(count % 2 === 0){
             tail.next = current2;
            current2 = current2.next;
        }else{
            tail.next = current1;
            current1 = current1.next;
        }
        count++
        tail = tail.next;
    }
    return dummyHead.next;
};

var reverseList = function(head, prev=null) {
 if(head === null) return prev;
    let next = head.next;
    head.next = prev;
   return reverseList(next, head);
};

// in place
var reorderList = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    let reverseHead = reverseList(slow);
  
    let current1 = head;
    let current2 = reverseHead;
    while(current2.next){
        let next1 = current1.next;
        let next2 = current2.next;
        
        current1.next = current2;
        current1 = next1;
        
        current2.next = current1;
        current2 = next2;
    }
    return head;
};

var reverseList = function(head, prev=null) {
 if(head === null) return prev;
    let next = head.next;
    head.next = prev;
   return reverseList(next, head);
};