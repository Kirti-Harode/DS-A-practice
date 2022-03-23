if (height === null) return 0;
    
    let leftMax = new Array(height.length);
    leftMax[0] = height[0];
    
    for (let i=1; i<height.length; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i-1])
    }
    
    // find the maximums seen so far going from right to left
    // calculate water trapped based on min maxHeight from both left and right
    //      add to running total for water