// 19. Remove Nth Node From End of List
// Medium

// 11057

// 513

// Add to List

// Share
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
 

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz
 

// Follow up: Could you do this in one pass?



var removeNthFromEnd = function(head, n) {
    // reverse linked list first?
    // second pass to iterate until we reach the nth node, then we can remove it
    // third pass to reverse back into original order
    
    // three pointers
    //  1. fast = move up n spots
    //  2. slow/curr = other one will start from the beginning 
    //  3. prev = keep track of prev
    
    // fast will move up n spots
    // slow and fast will then move up incrementally until fast is null
    //  now we know that slow is at the node we want to remove
    //  redirect prev to next
    
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let current = dummyHead;
    let fast = dummyHead;
    let prev = null;
    
    for(let i = 1; i <= n; i++){
        fast = fast.next;
    }
    
    while(fast !== null){
        prev = current;
        current = current.next;
        fast = fast.next;
    }
    prev.next = current.next;
    return dummyHead.next;
};