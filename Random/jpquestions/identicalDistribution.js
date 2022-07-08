//  An e-commerce company specializes in cards with sports figures on them. 
//  Each sport has different categories of cards. for instants, there might be more desirable cards with 
//  the most popular sport personalities, others with small pieces of a players jersey attached, and so on. 
//  They have a number of each category of card and want to make some number of packets greater than 1 
//  that each contain equal number of each type of card. 
//  To do this, they will add more card of each type until each type can be divided equally among some number of packets.
//   Determine the number minimum number of additional cards needed to create a number of packets with equal type distribution.


//  Example: 
// n = 5
// cardTypes = [4, 7, 5, 11, 15]
//  In order to make two matching packets, the following number of additional cards of 
//  each type must be added [0, 1, 1, 1, 1]. 
//  This sums to 4 additional cards. The numbers of cards are [4, 8, 6, 12, 16] and they can be divided evenly among two packets. 
//  If three packets are created, and additional squares [2, 2, 1, 1, 0] cards are needed, sum = 6 items. 
//  This yields quantities [6, 9, 6, 12, 15]. Any number of packets >= 2 can be created, but creating 2 packets requires a minimum number of
//   additional cards.

// Sample Case 0:
//  Sample Input For Custom Testing STOIN Function cardTypes [] size n = 5 cardTypes = [3, 8, 7, 6, 4] 5 3 B 2 6 Sample Output 2 
//  Explanation There are n= 5 types of cards in the amounts of card Types = 13.8, 7, 6, 4). 
//  In order to make 2 matching packets, the following numbers of additional cards of each type must be added: (1, 0, 1, 0, 0] 
//     which sums to 2 additional cards. The numbers of cards would then be 14, 8, 8, 6, 4, and they can be divided evenly among 2 packets. 
//     3 packets are created, an additional [0, 1, 2, 0, 2 cards are needed, sum=5 items. This yields quantities E. 9.9.6.6] 
//     Any number of packets 2 2 can be created, but creating 2 packets requires te minimal number of additional cards.

//not proprly working yet
function cardDistribution(cardTypes){
    let count = 0;
    for(let ele of cardTypes){
        if(ele % 2 !== 0){
            count ++;
        }
    }
    return count;
}