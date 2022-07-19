// Given a list of integers, remove any nodes that have values that have previously occurred in the list and return a reference to the head of the list.

// For example, the following list has a recurrence of the value 3 initially:

//      3 -> 4 -> 3 -> 6
//      3 -> 4 -> 6
 
// PS Example
// Remove the node at position 2 in the list above, 0 based indexing.
 

// Function Description 
// Complete the function condense in the editor below.

// condense has the following parameter(s):
//     head:  the head of a singly-linked list of integers, a LinkedListNode

// Note:. A LinkedListNode has two attributes: data, an integer, and next, a reference to the next item in the list or the language equivalent of null at the tail.

// Returns
//     reference to LinkedListNode: the head of the list of distinct values

// Constraints
// 1 ≤ n ≤ 10^5
// 0 ≤ LinkedListNode[i].val ≤ 1000

/*
 * Complete the 'condense' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST head as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function condense(head){          //3->4->3->6
    let values = new Set();    // {3,4}

    let current = head;
    let prev = null;
    while(current){
        if(values.has(current.val)){
            prev.next = current.next;
        }else{
            prev = current;
            
        }
        values.add(current.val);
        current = current.next;
    }
    return head;
}

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

let a = new Node(3);
let b = new Node(4);
let c = new Node(3);
let d = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = null;
console.log(condense(a));