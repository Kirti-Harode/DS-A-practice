// Heap:
    //  Tree based partially ordered data Structure
    // max heap, min heap
    
// max heap: node.val <= parent.val    [90, 44, 70, 40, 25, 5, 69]
    //                    90
    //                   /   \
    //                 44    70
    //                /  \   /  \
    //              40   25 5   69


// min heap: node.val >= parent.val    [5,25,40,70,90,44]

    //                     5
    //                   /   \
    //                 25    40
    //                /  \   / \
    //              70   90 44  (next added val goes here)

// Binary Heap: complete binary tree
// used for implementing prioprity queue
// implimented as an array

// if it is not a balanced tree, whlile cnverting it to an array there will be some null or undefined 
// spaces in the array that is why it needs to be balanced tree

// Binary Heap-Poll:
    // Pop the ele 
    // Move the last ele to the top
    // Heapify Down: recursively compare to children and swap with bigger child until reached to the last node 


// Binary Heap-Push:
    // insert the ele to the end 
    // Heapify Up: recursively compare to a parent that is smaller and swap, until reached to the root node or parent is not bigger than val added

    

// Binary Heap Index:

//                     Math.floor( (i-1)/2 )
//                           /       \
//                          i        i+1
//                        /   \
//                    i*2+1   i*2+2


// Operations: 
// Push, poll, Peek, isEmpty, size, merge

// Complexities:
// Push : O(logn)
// poll : O(logn)
// search : O(n)
// Peek : O(1)

