
class Array
    # Write an `Array#my_join` method. If my_join receives no argument, then use
    # an empty string to join the array together.
    # **Do NOT use the built-in `Array#join` method in your implementation.**
    #
    # Examples.
    # `[1,2,3].my_join` => '123'
    # `[1,2,3].my_join('$')` => '1$2$3'
  
    def my_join(separator = "")
      separator ||= ''
      result = ''
      (0...self.length-1).each do |i|
        result += self[i]
        result += separator
      end
      result += self[self.length-1]
      result
    end
  end
  