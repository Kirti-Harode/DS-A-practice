//  umbrellas are available in different sizes that are each able to shelter a certain number of people. 
//  Given the number of people needing shelter and a list of umbrella sizes, determining the minimum number of umbrellas necessary to 
//  cover exactly the number of people given and no more. 
//  If there is no combination of umbrellas of the same or different sizes that covers exactly that number of people return -1. 
//  For example 
//  requirement = 5, 
//  sizes = [3, 5] 
//  1 umbrella can cover exactly 5 people so the function should return 1.

function umbrellaCount(sizes, requirement){
    let count = 1;
    let obj = {};
    for(let size of sizes){
        obj[size] = true;
    }

    for(let key of Object.keys(obj)){
        let rem = requirement-key
        
        if(obj[rem]){
            count ++;
            if(rem === 0){
                return count;
            }
        }
    }
}