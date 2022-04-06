
class Array
    # Write an `Array#my_flatten` method that akes a multi-dimentional array and 
    # returns a single array of all the elements.
    #
    # Example: `[1,[2,3], [4,[5]]].my_flatten` => [1,2,3,4,5]
    
    def my_flatten
      flattened = []
      self.each do |ele|
        if !ele.kind_of?(Array)
          flattened << ele
        else
          flattened += ele.my_flatten
        end
      end
      flattened
    end
  