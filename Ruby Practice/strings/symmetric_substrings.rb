class String
    # Define a method `String#symmetric_substrings` that returns an array of 
    # substrings that are palindromes.  Only include substrings of length > 1.
  
    # example: "cool".symmetric_substrings => ["oo"]
  
    def symmetric_substrings
      palindromes = []
      (0...self.length).each do |i|
        (i+1...self.length).each do |j|
          sub = self[i..j]
          palindromes << sub if sub == sub.reverse
        end
      end
      palindromes
    end
end