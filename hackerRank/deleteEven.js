// Given a linked list of integers, return a linked list containing only nodes 
// having odd integers in their node->data field.

// Example
// n = 3

// listHead = 1 → 4 → 7

// The linked list containing only nodes having odd integers is 1 → 7.

// Function Description 
// Complete the function deleteEven in the editor below.
 

// deleteEven has the following parameter(s):
//     list listHead:  a reference to the head of the input linked list

// Returns:
//       list: a reference to the head of the resulting linked list.

// Constraints
// 1 ≤ n ≤ 10^5
// 1 ≤ node->data ≤ 10^5

/*
 * Complete the 'deleteEven' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST listHead as parameter.
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


function deleteEven(head){
    let dummyHead = new Node("null");
    dummyHead.next = head;
    let prev = dummyHead;
    let current = head;

    while(current){
        
        if(current.val % 2 === 0){
            prev.next = current.next;
        }else{
            prev = current;
        }
        current = current.next;
    }
    return dummyHead.next;
}

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

let a = new Node(4);
let b = new Node(5);
let c = new Node(3);
let d = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = null;
console.log(deleteEven(a));