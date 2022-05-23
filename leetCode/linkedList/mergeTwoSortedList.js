// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.


// n = nodes of list1
//  m = nodes of list2
// time: O(n+m)
// space: O(1)

var mergeTwoLists = function(list1, list2) {
    let dummyHead = new ListNode(null);
    let tail = dummyHead;
    
    let current1 = list1;
    let current2 = list2;
    
    while(current1 !== null && current2 !== null){
        if(current1.val <= current2.val){
            tail.next = current1;
            current1 = current1.next;
        }else{
           tail.next = current2;
            current2 = current2.next; 
        }
        tail = tail.next;
    }
    if(current1 !== null) tail.next = current1;
    if(current2 !== null) tail.next = current2;
    
    return dummyHead.next;
};


// n = nodes of list1
//  m = nodes of list2
// time: O(n+m)
// space: O(n+m)
var mergeTwoLists = function(list1, list2) {

    if(list1 === null && list2 === null) return null;
    if(list1 === null) return list2;
    if(list2 === null) return list1;
   
    if(list1.val <= list2.val){
        
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }else{
         
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};