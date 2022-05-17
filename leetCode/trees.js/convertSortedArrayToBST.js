// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.


// Example 1:


// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:


// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in a strictly increasing order.


var sortedArrayToBST = function(nums) {
    this.nums = nums
   return helper(0, nums.length-1);
};

function helper(l, r){
    if(l > r) return null;
    let mid = Math.floor((l + r) / 2);
    
    let root = new TreeNode(this.nums[mid]);
    root.left = helper(l, mid-1 );
    root.right = helper(mid+1, r);
    return root;
}


var sortedArrayToBST = function(nums) {
   return helper(0, nums.length-1, nums);
};

function helper(l, r, nums){
    if(l > r) return null;
    let mid = Math.floor((l + r) / 2);
    
    let root = new TreeNode(nums[mid]);
    root.left = helper(l, mid-1 , nums);
    root.right = helper(mid+1, r, nums);
    return root;
}

// Complexity Analysis

// Time complexity: O(N) since we visit each node exactly once.

// Space complexity: O(logN).

// The recursion stack requires O(log N) space because the tree is height-balanced. Note that the O(N)
//  space used to store the output does not count as auxiliary space, so it is not included in the space complexity.