# Write a function `anagrams(str1, str2)` that takes in two words and returns a 
# boolean indicating whether or not the words are anagrams. Anagrams are words 
# that contain the same characters but not necessarily in the same order. Solve 
# this without using `Array#sort` or `Array#sort_by`.

# n = input str1 length
# m = input str2 length
# n === m 

# time coplexity: O(n)
def anagrams(str1, str2)
  counter = Hash.new(0)
  str1.each_char do |char|
    counter[char] += 1
  end

  str2.each_char do |char|
    counter[char] -= 1
  end

  counter.each_value do |v|
    return false if v != 0 
  end
  return true
end