// (This problem is an interactive problem.)

// Each ship is located at an integer point on the sea represented by a cartesian plane, and each integer point may contain at most 1 ship.

// You have a function Sea.hasShips(topRight, bottomLeft) which takes two points as arguments and returns true If there is at least one ship in the rectangle represented by the two points, including on the boundary.

// Given two points: the top right and bottom left corners of a rectangle, return the number of ships present in that rectangle. It is guaranteed that there are at most 10 ships in that rectangle.

// Submissions making more than 400 calls to hasShips will be judged Wrong Answer. Also, any solutions that attempt to circumvent the judge will result in disqualification.

 

// Example :


// Input: 
// ships = [[1,1],[2,2],[3,3],[5,5]], topRight = [4,4], bottomLeft = [0,0]
// Output: 3
// Explanation: From [0,0] to [4,4] we can count 3 ships within the range.
// Example 2:

// Input: ans = [[1,1],[2,2],[3,3]], topRight = [1000,1000], bottomLeft = [0,0]
// Output: 3
 

// Constraints:

// On the input ships is only given to initialize the map internally. You must solve this problem "blindfolded". In other words, you must find the answer using the given hasShips API, without knowing the ships position.
// 0 <= bottomLeft[0] <= topRight[0] <= 1000
// 0 <= bottomLeft[1] <= topRight[1] <= 1000
// topRight != bottomLeft




/**
 * // This is Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Sea() {
 *     @param {integer[]} topRight
 *     @param {integer[]} bottomLeft
 *     @return {boolean}
 *     this.hasShips = function(topRight, bottomLeft) {
 *         ...
 *     };
 * };
 */

/**
 * @param {Sea} sea
 * @param {integer[]} topRight
 * @param {integer[]} bottomLeft
 * @return {integer}
 */

// my try : not working it will call hasShip function approx 1000 times and also doesnot calculate the ship at bottom right cordinate
 var countShips = function(sea, topRight, bottomLeft) {
    
    //     make small cartesian planes out of topright and bottomleft
    //     and then apply hasShip on the sea if that return true add 1 to the count
    //     return count at the end
        
    let count = 0;
    let newBottomLeft = [bottomLeft[0], bottomLeft[0]+1]
    let newTopRight = [bottomLeft[0]+1, bottomLeft[0]+2]
    while(newTopRight[1] <= topRight[1]){
        if(sea.hasShips(newTopRight, newBottomLeft )){
            console.log('true')
            count ++;
        }
        newBottomLeft = [bottomLeft[0]+1, bottomLeft[1]+1]
        newTopRight = [newTopRight[0]+1, newTopRight[1]+1]
        
    }
    return count;
};


// from solutions: working
var countShips = function(sea, topRight, bottomLeft) {
    //     divid each ract in to 4 ract
    //     check if they have ship if true divid again in four parts recursively 
    //     add all the returned values from the four parts together and return them
    //     base cases will be: if toprights.x is smaller than bottomleft.x or same for y return 0
    //     and if both x and ys are same then return 1 if hasship is true else false
    //     if hasship is false for the cord return 0
    //     to divid input ract in four ract -> calculate mid of X by adding both Xs and divid by 2 same for y
    //     bottom left ract from midX, midY+1 to bottomleft cord 
    //     bottom right from toprightX, midY to  midX+1, bottomleftY
    //     topLeft from midX, toprighty to bottomleftX, midY+1
    //     topright from toprightx, toprighty to midx+1, midy+1
        
    if (bottomLeft[0] > topRight[0] || bottomLeft[1] > topRight[1])
        return 0;
    if (!sea.hasShips(topRight, bottomLeft)) return 0 
        let [trX, trY] = topRight;
    let [blX, blY] = bottomLeft;
    if(trX === blX && trY === blY) return 1;
    
    let midX = Math.floor((trX + blX) / 2);
    let midY = Math.floor((trY + blY) / 2);
    
    let topLeftRect = countShips(sea, [midX, trY], [blX, midY+1]);
    let topRightRect = countShips(sea, [trX, trY], [midX+1, midY+1]);
    let bottomLeftRect = countShips(sea, [midX, midY], [blX, blY]);
    let bottomRightRect = countShips(sea, [trX, midY], [midX+1, blY]);
    
    return topLeftRect + topRightRect + bottomLeftRect + bottomRightRect;
}

// Time Complexity: O(S(log_2 max(M, N) - log_4 S))

// Space Complexity: O(log_2 max(M, N))
  