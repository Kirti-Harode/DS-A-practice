
// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from  1 to n . 
// Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

// Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

// Example:
// q = [1,2,3,5,4,6,7,8]

// If person 5 bribes person 4, the queue will look like this:1,2,3,5,4,6,7,8 . Only 1 bribe is required. Print 1.

// q = [4,1,2,3]
// Person 4 had to bribe 3 people to get to the current position. Print Too chaotic.

// Function Description:

// Complete the function minimumBribes in the editor below.

// minimumBribes has the following parameter(s):

// int q[n]: the positions of the people after all bribes
// Returns

// No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than 2 people.
// Input Format

// The first line contains an integer t, the number of test cases.

// Each of the next t pairs of lines are as follows:
// - The first line contains an integer t , the number of people in the queue
// - The second line has n space-separated integers describing the final state of the queue.

// Constraints: 
// 1 <= t <= 10
// 1 <= n <= 10^5



function minimumBribes(q) {
    
    let bribes = 0;
    let arr = [];
    for(let i = 1; i <= q.length; i++){
        arr.push(i);
    }
    
    for(let i = 0; i < q.length; i++ ){
        if(q[i] != arr[i]){
            if(q[i] === arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                bribes += 1;
            }
            else if(q[i] === arr[i+2]){
                [arr[i+1], arr[i+2]] = [arr[i+2], arr[i+1]];
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                bribes += 2;                
            }
            else{
                console.log('Too chaotic');
                return;
            }
        }
    }
    console.log(bribes);
}


// [1, 2, 5, 3, 7, 8, 6, 4]




// have a flag for chaotic intially = false
// have a bribe counter initially = 0
// loop through the input i
// compare current position subtract index + 1 > 2 set --> chaotic = true
// nested loop j < i


// // O(2^n) time | O(1) constant space
// function minimumBribes(input) { // 
//   let bribes = 0;
//   for (let i=0; i < input.length; i++) { i = 7
//   	if (input[i] - (i+1) > 2) return "Too chaotic"; // 4 - 7 + 1 > 2 === false
//     for (let j=0; j < i; j++) { // i = 7, j = 0
//     	if (input[j] > input[i]) bribes++ // 6 > 4
//       // bribes 7
//     }
//   }
//   return bribes
// }
