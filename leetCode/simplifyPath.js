// Given a string path, which is an absolute path (starting with a slash '/') to 
// a file or directory in a Unix-style file system, convert it to the simplified canonical path.

// In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level,
//  and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. 
//  For this problem, any other format of periods such as '...' are treated as file/directory names.

// The canonical path should have the following format:

// The path starts with a single slash '/'.
// Any two directories are separated by a single slash '/'.
// The path does not end with a trailing '/'.
// The path only contains the directories on the path from the root directory to the target file or directory
//       (i.e., no period '.' or double period '..')
// Return the simplified canonical path.

// Example 1:

// Input: path = "/home/"
// Output: "/home"
// Explanation: Note that there is no trailing slash after the last directory name.
// Example 2:

// Input: path = "/../"
// Output: "/"
// Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.
// Example 3:

// Input: path = "/home//foo/"
// Output: "/home/foo"
// Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.
 

// Constraints:

// 1 <= path.length <= 3000
// path consists of English letters, digits, period '.', slash '/' or '_'.
// path is a valid absolute Unix path.

var simplifyPath = function(path) {
//     initialize a stack
//     split the input by /, => arr
//     for each ele in the arr 
//     if ele is empty or single . do nothing, continue
//     if ele is double dots pop from stack
//     at the end join stack with slash and return
    
    let stack = [];
    let splited = path.split("/");
    
    for(let ele of splited){
        if(ele === "" || ele === '.') {
            continue;
        }else if(ele === '..'){
            if(stack.length > 0){
                stack.pop();
            }
        }else{
            stack.push(ele);
        }
    }
    let result = ''
    for(let ele of stack){
        result += '/'
        result += ele
    }
    
    if (result === ''){
        return '/';
    } else{
        return result;
    }
};

// Complexity Analysis:

// Time Complexity: O(N)O(N) if there are NN characters in the original path. 
// First, we spend O(N)O(N) trying to split the input path into components and then we process each component one by one 
// which is again an O(N)O(N) operation. We can get rid of the splitting part and just string together the characters and 
// form directory names etc. However, that would be too complicated and not worth depicting in the implementation. 
// The main idea of this algorithm is to use a stack. How you decide to process the input string is a personal choice.
// Space Complexity: O(N)O(N). Actually, it's 2N2N because we have the array that contains the split
//  components and then we have the stack.