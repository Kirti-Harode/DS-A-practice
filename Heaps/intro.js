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
    // Heapify Up: recursively compare to a parent that is smaller and swap, until reached to the last node

    

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

