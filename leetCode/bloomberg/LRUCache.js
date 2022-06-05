// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

 

// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4
 

// Constraints:

// 1 <= capacity <= 3000
// 0 <= key <= 104
// 0 <= value <= 105
// At most 2 * 105 calls will be made to get and put.

// create a node class
// store key, val, next and prev pointers
// 

class Node {
    constructor(key, val){
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
var LRUCache = function(capacity) {
    this.cap = capacity;
    this.cache = new Map();    // key is input key, val is node from linkedlist
    this.left = new Node(0, 0);
    this.right = new Node(0, 0);
    this.left.next = this.right;
    this.right.prev = this.left;
    this.size = 0;
};

LRUCache.prototype.insert = function(node) {
    this.size += 1
    
        const prev = this.right.prev 
        const next = this.right 
        prev.next = node 
        node.prev = prev 
        node.next = next 
        next.prev = node 
};

LRUCache.prototype.remove = function(node) {
    this.size -= 1
        const prev = node.prev 
        const next = node.next 
        prev.next = next 
        next.prev = prev 
};
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (key in this.cache) {
        this.remove(this.cache[key])
        this.insert(this.cache[key])
        return this.cache[key].val
    }
    
    return - 1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (key in this.cache) {
        this.remove(this.cache[key])
    }
    
    this.cache[key] = new Node(key, value)
    this.insert(this.cache[key])
    
    if (this.size > this.cap) {
        const lru = this.left.next 
        this.remove(lru)
        delete this.cache[lru.key]
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
