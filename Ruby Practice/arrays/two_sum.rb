class Array
    # Define a method `Array#two_sum`, that finds all pairs of positions where the 
    # elements at those positions sum to zero. The method should return a nested 
    # array of positions.
  
    # Ordering matters. We want each of the pairs to be sorted smaller index 
    # before bigger index. We want the array of pairs to be sorted "dictionary-wise":
    #   [0, 2] before [1, 2] (smaller first elements come first)
    #   [0, 1] before [0, 2] (then smaller second elements come first)
  
    def two_sum
      result = []
  
      (0...self.length).each do |i|
        (0...self.length).each do |j|
          if j > i && (self[i] + self[j] == 0)
            result << [i, j]
          end
        end
      end
      result
    end
  end