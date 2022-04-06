
class Array
    # Define a method `Array#my_rotate(positions)` that rotates the elements 
    # correctly based on the argument provided.  The work for positive and 
    # negative integer arguments.  You CANNOT use Ruby's `Array#rotate` or 
    # `Array#rotate!`.
  
    def my_rotate(positions=1)
      dup = self.dup
      if positions > 0
        positions.times do 
          ele = dup.shift
          dup.push(ele)
        end
  
      else
        position = positions * (-1)
        position.times do 
          ele = dup.pop
          dup.unshift(ele)
        end
      end
  
      dup
    end  
  end
  
  