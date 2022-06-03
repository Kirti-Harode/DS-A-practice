// A transaction is possibly invalid if:

// the amount exceeds $1000, or;
// if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
// You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.

// Return a list of transactions that are possibly invalid. You may return the answer in any order.

 

// Example 1:

// Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
// Output: ["alice,20,800,mtv","alice,50,100,beijing"]
// Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.
// Example 2:

// Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
// Output: ["alice,50,1200,mtv"]
// Example 3:

// Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
// Output: ["bob,50,1200,mtv"]
 

// Constraints:

// transactions.length <= 1000
// Each transactions[i] takes the form "{name},{time},{amount},{city}"
// Each {name} and {city} consist of lowercase English letters, and have lengths between 1 and 10.
// Each {time} consist of digits, and represent an integer between 0 and 1000.
// Each {amount} consist of digits, and represent an integer between 0 and 2000.



// create an ouput array for invalid transactions
// create an empty object to keep data for each user, user name as a key and value an array of all trans
// sort the input, in increasing order of time
// loop over the input add usera as a key and val as all the trans in array
// loop over the input again if amount is more then 1000 push that transaction into the output arra
// for other trans, check the name in data object loop over those transaction and for each transaction check for time diff and city name 
// if invalid then add those transactions to the output array

// time: O(m*nlogn)   n = len of input, m = num of trans with same name
// space: O(n)   for the data hash and n for output also
var invalidTransactions = function(transactions) {      //n = length of input
    let invalidTrans = [];
    let data = {};
    transactions = transactions.sort((a,b) => a[1]-b[1]);            //O(nlogn)
    for(let ele of transactions){                                     //O(n)
        let transaction = ele.split(",");
        let name = transaction[0];
        let time = parseInt(transaction[1]);
        let amount = transaction[2];
        let city = transaction[3];

        if(!(name in data)){
            data[name] = [[time, amount, city]];
        }else{
           data[name].push( [time, amount, city]);     
        }
    }

    for(let ele of transactions){                           //O(n)
        let transaction = ele.split(",");
        let name = transaction[0];
        let time = transaction[1];
        let amount = transaction[2];
        let city = transaction[3];
        
        if(amount > 1000){
            invalidTrans.push(ele);
            continue;
        }
        if(name in data){                        
            for(let sub of data[name]){                   //m = all the transactions from same name, O(m)
                // console.log(sub)
                let timeDiff = Math.abs(time - parseInt(sub[0]))
                if( timeDiff <= 60 && city !== sub[2]){
                    // console.log('true')
                    invalidTrans.push(ele);
                    break;
                }
            }
        }
    }
    
    return invalidTrans;
};