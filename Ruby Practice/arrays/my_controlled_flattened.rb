def my_controlled_flatten(n = nil)
    flattened = []
    self.each do |ele|
      if ele.kind_of?(Array) && n != 0
        if n.nil?
          flattened += ele.my_controlled_flatten
        else
          flattened += ele.my_controlled_flatten(n-1)
        end
      else
        flattened << ele
      end
    end
    flattened
  end
end