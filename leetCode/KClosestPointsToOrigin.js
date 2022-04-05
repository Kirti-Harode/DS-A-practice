// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).


// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
// Example 2:

// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Output: [[3,3],[-2,4]]
// Explanation: The answer [[-2,4],[3,3]] would also be accepted.
 

// Constraints:

// 1 <= k <= points.length <= 104
// -104 < xi, yi < 104


// time coplexity: O(nlogn)
// space: O(n) doubt

var kClosest = function(points, k) {
    
    //     create an empty hash
    //     iterate over the ponits arr
    //     for each i, use distance formula and store the values in hash
    //     origin is (0, 0)
    //     loop over each keys of hash and find min values according to k's val
    //     return keys corsponding to min values in an arr
        
    let result = [];
    let distances = [];
    
    for(let i = 0; i < points.length; i++){
        let x1 = points[i][0];
        let y1 = points[i][1];
        
        let x2 = 0;
        let y2 = 0;
        
        let dist = Math.sqrt((x1 - x2)**2 + (y1-y2)**2);
        let obj = {'cord': points[i], 'distance': dist}
        distances.push(obj);
    }
    
    let sorted = distances.sort(compare)
    // console.log(sorted);
    
    let a = 1;
    let b = 0;
    while(a <= k){
        result.push(distances[b].cord);
        a++;
        b++;
    }
    return result;
};
    
function compare(a, b) {
    const valA = a.distance;
    const valB = b.distance;

    let comparison = 0;
    if (valA > valB) {
    comparison = 1;
    } else if (valA < valB) {
    comparison = -1;
    }
    return comparison;
}
    