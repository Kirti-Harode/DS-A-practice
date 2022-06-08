// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
 

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2
 

// Constraints:

// -231 <= val <= 231 - 1
// Methods pop, top and getMin operations will always be called on non-empty stacks.
// At most 3 * 104 calls will be made to push, pop, top, and getMin.


var MinStack = function() {
    stack = [];
    
  };
  
  /** 
   * @param {number} val
   * @return {void}
   */
  MinStack.prototype.push = function(val) {
      if(stack.length === 0){
          stack.push({value: val, minVal: val})
      }else{
          stack.push({value: val, minVal: Math.min(val, stack[stack.length-1].minVal)});
      }
  };
  
  /**
   * @return {void}
   */
  MinStack.prototype.pop = function() {
      let popped = stack.pop()
      return popped.value;
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.top = function() {
      return stack[stack.length-1].value;
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.getMin = function() {
      return stack[stack.length-1].minVal;
  };
  
  /** 
   * Your MinStack object will be instantiated and called as such:
   * var obj = new MinStack()
   * obj.push(val)
   * obj.pop()
   * var param_3 = obj.top()
   * var param_4 = obj.getMin()
   */