const trap = function(height) {
     
    if (height === null) return 0;
    
    let totalWater = 0;
    let length = height.length;
    let leftMax = new Array(length);
    let rightMax = new Array(length);
    
    leftMax[0] = height[0];
    rightMax[length-1] = height[length-1];
    
    for (let i=1; i<length; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i-1]);
    }
    
    for (let i=length-2; i>=0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i+1])
    }
    
    for (let i=1; i<length-1; i++) {
        totalWater += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    
    return totalWater;
};