
# A palindrome is a word or sequence of words that reads the same backwards as
# forwards. Write a method that returns the length of the longest palindrome in
# a given string. If there is no palindrome longer than two letters, return false.

def longest_palindrome(string)
    palindromes = []
    (0...string.length).each do |i|
      (i+1...string.length).each do |j|
         sub = string[i..j]
         palindromes << sub.length if sub == sub.reverse
      end
    end
  
    if !palindromes.empty?
      return palindromes.max if palindromes.max > 2
    else
      return false;
    end
end