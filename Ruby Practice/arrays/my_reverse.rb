class Array
    # Write an `Array#my_reverse` method that reverses the order in which elements
    # appear within the array. **Do NOT use the built-in `Array#reverse` method
    # in your implementation.**
    
    def my_reverse
      reversed = []
  
      i = self.length-1
      while(i >= 0)
        reversed << self[i]
        i -= 1
      end
      reversed
    end
end