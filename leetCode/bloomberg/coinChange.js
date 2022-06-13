// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
 

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104


var coinChange = function(coins, amount ) {
    let result = _coinChange(coins, amount, memo={});
    if(result === Infinity) return -1;
    return result;
}
var _coinChange = function(coins, amount, memo ) {
    if(amount < 0) return Infinity;
    if(amount === 0) return 0;
    if(amount in memo) return memo[amount];
    let minCoins = Infinity;
    
    for(let coin of coins){
        let numCoins = 1 + _coinChange(coins, amount-coin, memo);
        minCoins = Math.min(minCoins, numCoins);
    }
    memo[amount] = minCoins;
    return  memo[amount];
};

//time with out memo=> O(coins^ amount), with memo O(c*a)