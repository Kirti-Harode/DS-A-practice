class Hash
    # Write a `Hash#my_merge(other_hash)` method. This should NOT modify the 
    # original hash and return a combined version of both hashes.
    # **Do NOT use the built-in `Hash#merge` method in your implementation.**
    
    def my_merge(other_hash)
      result = {}
  
      self.each do |k, v|
        result[k] = v
      end
  
      other_hash.each do |k, v|
        result[k] = v
      end
      result
    end
  end
  