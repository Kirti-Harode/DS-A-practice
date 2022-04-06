
class Array
    # Write an `Array#median` method that returns the median element in an array.
    # If the length is even, return the average of the middle two elements.
  
    def median
      sorted = self.sort
      return nil if self.empty? 
      if sorted.length % 2 != 0
        return sorted[sorted.length/2]
      else
        idx1 = sorted.length/2.0
        idx2 = idx1-1
        return (sorted[idx1] + sorted[idx2]) / 2.0
      end
    end
  end
  