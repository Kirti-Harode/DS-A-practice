// Design a Leaderboard class, which has 3 functions:

// addScore(playerId, score): Update the leaderboard by adding score to the given player's score. If there is no player with such id in the leaderboard, add him to the leaderboard with the given score.
// top(K): Return the score sum of the top K players.
// reset(playerId): Reset the score of the player with the given id to 0 (in other words erase it from the leaderboard). It is guaranteed that the player was added to the leaderboard before calling this function.
// Initially, the leaderboard is empty.

// Example 1:

// Input: 
// ["Leaderboard","addScore","addScore","addScore","addScore","addScore","top","reset","reset","addScore","top"]
// [[],[1,73],[2,56],[3,39],[4,51],[5,4],[1],[1],[2],[2,51],[3]]
// Output: 
// [null,null,null,null,null,null,73,null,null,null,141]

// Explanation: 
// Leaderboard leaderboard = new Leaderboard ();
// leaderboard.addScore(1,73);   // leaderboard = [[1,73]];
// leaderboard.addScore(2,56);   // leaderboard = [[1,73],[2,56]];
// leaderboard.addScore(3,39);   // leaderboard = [[1,73],[2,56],[3,39]];
// leaderboard.addScore(4,51);   // leaderboard = [[1,73],[2,56],[3,39],[4,51]];
// leaderboard.addScore(5,4);    // leaderboard = [[1,73],[2,56],[3,39],[4,51],[5,4]];
// leaderboard.top(1);           // returns 73;
// leaderboard.reset(1);         // leaderboard = [[2,56],[3,39],[4,51],[5,4]];
// leaderboard.reset(2);         // leaderboard = [[3,39],[4,51],[5,4]];
// leaderboard.addScore(2,51);   // leaderboard = [[2,51],[3,39],[4,51],[5,4]];
// leaderboard.top(3);           // returns 141 = 51 + 51 + 39;
 
// Constraints:

// 1 <= playerId, K <= 10000
// It's guaranteed that K is less than or equal to the current number of players.
// 1 <= score <= 100
// There will be at most 1000 function calls.


var Leaderboard = function() {
    this.scores = {};
    
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    if(playerId in this.scores){
        this.scores[playerId] += score;
    }else{
        this.scores[playerId] = score;
    }
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    let minHeap = new Heap();
    let allScores = Object.values(this.scores);
    
    for(let score of allScores){
        if(minHeap.size() < K){
            minHeap.push(score); 
            // console.log("if  " + minHeap.data);
        }else if(minHeap.peek() < score){
            minHeap.poll();
            minHeap.push(score); 
            // console.log("else  " + minHeap.data);
            
        }
    }
    let sum = 0;
    for(let num of minHeap.data){
        sum += num;
    }
    return sum;
    
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    delete this.scores[playerId];
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */

class Heap {
    constructor(){
        this.data = [];
    }

    getParentIndex(i){
        return Math.floor((i-1)/2);
    }

    getLeftChildIndex(i){
        return i*2+1;
    }

    getRightChildIndex(i){
        return i*2+2;
    }

    swap(i1, i2){
        let temp = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = temp;
    }
    size(){
        return this.data.length;
    }
    peek(){
        return this.data[0];
    }
    push(val){
        this.data[this.data.length] = val;
        this.heapifyUp();
    }

    heapifyUp(){
        let currentIndex = this.data.length-1;
        
        while(this.data[currentIndex] < this.data[this.getParentIndex(currentIndex)]){
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    poll(){
        let minValue = this.data[0];
        this.data[0] = this.data[this.data.length-1];
        this.data.length --;
        this.heapifyDown();
        return minValue;
    }

    heapifyDown(){
        let currentIndex = 0;
        while(this.data[this.getLeftChildIndex(currentIndex)] !== undefined){
            let smallestChildIndex = this.getLeftChildIndex(currentIndex);
            let rightChildIndex = this.getRightChildIndex(currentIndex);

            if(this.data[rightChildIndex] !== undefined && this.data[smallestChildIndex] > this.data[rightChildIndex]){
                smallestChildIndex = rightChildIndex;
            }

            if(this.data[currentIndex] > this.data[smallestChildIndex]){
                this.swap(currentIndex, smallestChildIndex);
                currentIndex = smallestChildIndex;
            }else{
                return;
            }
        }
    }
}
