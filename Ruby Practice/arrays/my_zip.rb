
class Array
    # Define a method `Array#my_zip(*arrays)` that merges elements from the 
    # receiver with the corresponding elements from each provided argument. You 
    # CANNOT use Ruby's built-in `Array#zip` method
  
    # example => [1,2,3].my_zip([4,5,6], [7,8,9]) 
    # should return => [[1,4,7], [2,5,8], [3,6,9]]
  
    def my_zip(*arrays)
      zipped = []
      
      (0...self.length).each do |i|
        sub = [self[i]]
        (0...arrays.length).each do |j|
          sub << arrays[j][i]
        end
        zipped << sub
      end
      zipped
    end
end