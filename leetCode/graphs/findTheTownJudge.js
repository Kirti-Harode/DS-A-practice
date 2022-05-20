// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.

// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

 

// Example 1:

// Input: n = 2, trust = [[1,2]]
// Output: 2
// Example 2:

// Input: n = 3, trust = [[1,3],[2,3]]
// Output: 3
// Example 3:

// Input: n = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1
 

// Constraints:

// 1 <= n <= 1000
// 0 <= trust.length <= 104
// trust[i].length == 2
// All the pairs of trust are unique.
// ai != bi
// 1 <= ai, bi <= n


/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(n, trust) {
    if(trust.length < (n-1)) return -1;
    
    let inDegrees = new Array(n+1).fill(0)
    let outDegrees = new Array(n+1).fill(0)
    
    for(let sub of trust){
        let [a, b] = sub;
        outDegrees[a] ++;
        inDegrees[b] ++;
    }
    
    for(let i = 1; i <= n; i++){
        if(inDegrees[i] === (n-1) && outDegrees[i] === 0) return i;
    }
    return -1;
};

// Complexity Analysis

// Let NN be the number of people, and EE be the number of edges (trust relationships).

// Time Complexity : O(E).

// We loop over the trust list once. The cost of doing this is O(E).

// We then loop over the people. The cost of doing this is O(N).

// Going by this, it now looks this is one those many graph problems where the cost is  O(max(N,E)=O(N+E). After all, we don't know whether EE or N is the bigger one, right?

// However, remember how we terminate early if E < N - 1? This means that in the best case, the time complexity is O(1)O(1). And in the worst case, we know that E ≥ N - 1E≥N−1.
//  For the purpose of big-oh notation, we ignore the constant of 11. Therefore, in the worst case, EE has to be bigger, and so we can simply drop the NN, leaving O(E).

// Space Complexity : O(N).

// We allocated 2 arrays; one for the indegrees and the other for the outdegrees. Each was of length N + 1. Because in big-oh notation we drop constants, this leaves us with O(N).