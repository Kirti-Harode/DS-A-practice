// A website domain "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com" and at the lowest level, "discuss.leetcode.com".
// When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.
// A count-paired domain is a domain that has one of the two formats "rep d1.d2.d3" or "rep d1.d2" where rep is the number of visits to the domain and d1.d2.d3 is the domain itself.
// For example, "9001 discuss.leetcode.com" is a count-paired domain that indicates that discuss.leetcode.com was visited 9001 times.
// Given an array of count-paired domains cpdomains, return an array of the count-paired domains of each subdomain in the input. You may return the answer in any order.


// Example 1:

// Input: cpdomains = ["9001 discuss.leetcode.com"]
// Output: ["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]
// Explanation: We only have one website domain: "discuss.leetcode.com".
// As discussed above, the subdomain "leetcode.com" and "com" will also be visited. So they will all be visited 9001 times.

// Example 2:

// Input: cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
// Output: ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
// Explanation: We will visit "google.mail.com" 900 times, "yahoo.com" 50 times, "intel.mail.com" once and "wiki.org" 5 times.
// For the subdomains, we will visit "mail.com" 900 + 1 = 901 times, "com" 900 + 50 + 1 = 951 times, and "org" 5 times.



// pseudoCode:

// create an empty hash
// iterate over the input
// for each ele split by space
// add first ele as a val and the second ele (domain) as a key into the hash
// check if exists in hash if it does than add that num to already exist domain
// iterate over domain 
// count all the dots first in a sepearte loop
// iterate over the domain and untill dots is zero split and add key val to hash
// return hash or return formatted output

// time: 
// n input length
// m is input[i] length
// l is domain length
// O(n * m * l)

// space: O(n) for hash 
function countDomains(input){
  let allDomains = {};

  for(let i = 0; i < input.length; i++){
    let arr = input[i].split(" ");
    let num = Number(arr[0]);
    let domain = arr[1];

    if(allDomains[domain]){
      allDomains[domain] += num;
    }else{
      allDomains[domain] = num;
    }

    let subdomains = domain.split(".");
    for(let k = 1;  k < subdomains.length; k++){
      let sub = subdomains[k];
      for(let l = k+1; l < subdomains.length; l++){
        sub += ('.' + subdomains[l]);
      }
      if(allDomains[sub]){
        allDomains[sub] += num;
      }else{
        allDomains[sub] = num;
      }
     
    }

  }

  let result = [];
  let keys = Object.keys(allDomains);
  
  for(let a = 0; a < keys.length; a++){
      let subs = '';
      subs += (allDomains[keys[a]] + " ");
      subs += keys[a];
      result.push(subs)
  }
  return result;
}

// cpdomains = ["9001 discuss.leetcode.com"];
cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];
console.log(countDomains(cpdomains));





// old solution not completed

// iterating over th input
// split each ele by space, store one as a num and sencd as a domain
// add the numa nd the domain to a str and add to the rsult array
// iterate over the domain
// find the first dot
// split the domain get the second half with the num 
// find secnd dot ad split from that and add remaining to the output str and then to result

// n = input  m = elements // "google.mail.com"
// O(n * m) time | O(n) space
function findDomains(input){
	let result = [];
  
  let allSubDomains = [] // [[900, 'g.mail.com','m.c', 'c'], ]
  for(let i = 0; i < input.length; i++){   //["900 google.mail.com"]
    let ele = input[i].split(" ")
  	let num = Number(ele[0]);   //900
    let domain = ele[1];  
 
    let innerSub = [num]
  
    let j = 0
 		
    while(j < domain.length){

    	if(domain[j] === '.'){ //["google", "mail", "com"] goolgle.mail.com
      	let subDomain = domain.split(i+1, domain.length);
        j++;
       
        innerSub.push(subDomain);
      }
    }
    
   allSubDomains.push(subDomain);   // [900, 'g.mail.com','m.c', 'c']

  }
	
for(let a = 0 ; a < allSubDomains.length; a++ ){
	for(let b = 0; b < allSubDomains[i].length; b++){
  	
  }
}
  
}

