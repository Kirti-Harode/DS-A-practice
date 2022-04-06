class Array
    # Write an `Array#dups` method that will return a hash containing the indices 
    # of all duplicate elements. The keys are the duplicate elements; the values 
    # are arrays of their indices in ascending order.
    # e.g. [1, 3, 4, 3, 0, 3, 0].dups => { 3 => [1, 3, 5], 0 => [4, 6] }
  
    def dups
      dups = Hash.new {|h, k| h[k] = []}
  
      self.each_with_index do |num, i|
        dups[num] << i
      end
  
      dups.select {|k, v| v.length > 1}
    end
  end