// create linked list
// Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list.

// test_00:
// createLinkedList(["h", "e", "y"]);
// // h -> e -> y
// test_01:
// createLinkedList([1, 7, 1, 8]);
// // 1 -> 7 -> 1 -> 8
// test_02:
// createLinkedList(["a"]);
// // a
// test_03:
// createLinkedList([]);
// // null


const createLinkedList = (values) => {
    //   iterate over the input array
    //   for each ele create a node 
    //   set node.next to next ele node
    //   increment i 
    //   return first ele as head
      
    //   time: O(n)
    //   space: O(n)
    let dummy = new Node(null);
    let tail = dummy;
    let i = 0;
    while(i < values.length){
    let node = new Node(values[i]);
    tail.next = node;
    tail = tail.next;
    i++;
    }
    return dummy.next;
}    

const createLinkedList = (values) => {
    //   recursively:
    //   time: O(n2)
    //   space: O(n)
      if(values.length === 0)return null;
      let head = new Node(values[0]);
      head.next = createLinkedList(values.slice(1)); //this is also O(n) slice
      return head;
      
};

// OR
const createLinkedList = (values, i=0) => {
    //   recursively:
    //   time: O(n)
    //   space: O(n)
      if(i === values.length) return null;
      let head = new Node(values[i]);
      head.next = createLinkedList(values, i+1); 
      return head;
};