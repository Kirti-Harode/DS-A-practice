// Dynamic programming is a type of problem solving where utilize any overlapping sub problems:
// to implemient:
// 1) Memorization: use a memo to store some data so that yiou can access data from it in constant time
// usially in js use object


//  Memorization is a design pattern, where we cache return values based on the argumets of a function 
// in order to avoid duplicate computation.

// other way to implementaion of dynamic programming is tabulation


// for memorization, the memo keys should always conrain the arguments that vary during the recursion. Arguments that don't change do not need to be in the key.

// Always store the value returned from recurisve call in the memo

// write brute force first then convert it to dynamic programming.
// try to drwa out the logic as a recursion tree, finding duplicate subtrees means that there are duplicate subproblems so dynamic programminfg can apply.
