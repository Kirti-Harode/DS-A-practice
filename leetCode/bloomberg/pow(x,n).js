// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
 

// Constraints:

// -100.0 < x < 100.0
// -231 <= n <= 231-1
// -104 <= xn <= 104

// time:O(logn), space:O(1)


var myPow = function(x, n) {
    // return x ** n;
    
    if(n < 0){
        x = 1/x;
        n = -(n);
    }
    
    let ans = 1;
    
    let currentProduct = x;   // 2
    for(i = n; i > 0; i/=2){    // 10, 5, 2.5
        if(Math.floor(i % 2) === 1){
            ans = ans * currentProduct;  // 4
        }
        currentProduct = currentProduct * currentProduct      //4 8
    }
    return ans;
};