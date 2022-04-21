// 1) must be built from an alphabet (each Node contain 0 - n children, where n = num of characters alphabets.(each nodes can have 26 childrens)
// 2) nodes must be made from a list of words => must be made from the selected alphabets.
// 3) no same letter children 
// 4) Trie is a directed graph
// 5) Depth first is to use for traversal because word can be formed only depth way not breadth way


// Apple
// Alpha
// App
// Apron


//                  ()          root node
//                  |
//                  A
//                /   \
//               P     L
//             /   \    \
//            P     R    P
//           /     /  \   \
//          L     O        H
//         /     /          \
//        E     N            A


// first built a Node class first

class Node {
    constructor(char){
        this.char = char;
        this.isEnd = false;
        this.children = {};
    };
};

class Trie {
    constructor(){
        this.root = new Node(null);
    };

    insert(word){
    // iterate over the word and make nodes
    // add first letter to root 

        let node = this.root;
        for(let char of word) {
            // create new node
            // insert node into children
            // move to next node

            if(!(char in node.children)){
                node.children[char] = new Node(char);
            }
            node = node.children[char];
        }
        node.isEnd = true;  //to prevent the duplicate nodes and to know reached end of the word
    };

    search(word) {
    // TODO
    // RETURN TRUE AND FALSE
    }
    
}

const trie = new Trie();

trie.insert("foo");
