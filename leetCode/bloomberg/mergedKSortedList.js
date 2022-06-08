// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []

// Constraints:

// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.


var mergeKLists = function(lists) {
    //     merge every two linkedlists together
    //     then merge two results 
    //     until left just one linkedlist
        
        if( lists.length === 0) return null;
        
        while(lists.length > 1){
            let mergedLists = [];
            
            for(let i = 0; i < lists.length; i+=2){
                let l1 = lists[i];
                let l2 = i+1 < lists.length ? lists[i+1] : null
                
                mergedLists.push(mergeTwoLists(l1, l2)); 
            } 
           
            lists = mergedLists;
        }
        return lists[0];
    };
    
    function mergeTwoLists(l1, l2){
        if(l1 === null && l2 === null) return null;
        if(l1 === null) return l2;
        if(l2 === null) return l1;
        
        if(l1.val <= l2.val){
            let next = l1.next;
           l1.next = mergeTwoLists(next, l2);
            return l1;
        }else{
            let next = l2.next;
           l2.next = mergeTwoLists(l1, next);
            return l2;
        }
    }
    
    
    // Complexity Analysis
    
    // Time complexity : O(Nlogk) where k is the number of linked lists.
    
    // We can merge two sorted linked list in O(n) time where nn is the total number of nodes in two lists.
    // Sum up the merge process and we can get: O(Nlogk)
    // Space complexity : O(1)
    // We can merge two sorted linked lists in O(1) space.