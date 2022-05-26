// Given the head of a singly linked list, return true if it is a palindrome.

 

// Example 1:


// Input: head = [1,2,2,1]
// Output: true
// Example 2:


// Input: head = [1,2]
// Output: false
 

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9
 

var isPalindrome = function(head) {
    //     create an empty values arr to store all th enode values
    //     set current var to head
    //     while current is not null
    //     add current's val to values arr
    //     set current to current's next
    //     after loop iterate over the values arr using two pointers
    //     start i from 0 and j from end of the values arr
    //     while i and j are not equal 
    //     if vlues at i and values at j are not equal just return false
    //      at the end retun true, after checking each ele of values
        
    //     let values = [];
    //     let current = head;
    //     while(current !== null){
    //         values.push(current.val);
    //         current = current.next;
    //     }
        
    //     let i = 0;
    //     let j = values.length-1;
        
    //     while(i <= j){
    //         if(values[i] !== values[j]) return false;
    //         i ++;
    //         j --;
    //     }
    //     return true;
        
        
    // Without using any space : O(1)
        
    //     two runners strategy
    //     iterate over the linkedlist with a fast and a slow pointer
    //     when fast reaches the end slow is at the mid of linkedlist
    //     from here we can access the second half or the first half of the linkedlist
    //     reverse the second half of the linkedlist
    //     use a pointer at start of the lnkedlist and one at the start of the second half and compare those val of node
        
        if(head === null) return true;
        let firstHalfEnd = endOfFirstHalf(head);
        let secondHalfStart = reversedList(firstHalfEnd.next);
        
        let p1 = head;
        let p2 = secondHalfStart;
        let result = true;
        
        while(result && p2 != null){
            if(p1.val !== p2.val) result = false;
            p1 = p1.next;
            p2 = p2.next;
        }
        
        firstHalfEnd.next = reversedList(secondHalfStart);
        return result;
    };
    
    function endOfFirstHalf(head){
        let slow = head;
        let fast = head;
        while(fast.next !== null && fast.next.next !== null){
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    }
    
    function reversedList(head){
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