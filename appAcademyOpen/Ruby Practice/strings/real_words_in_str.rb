class String
    # Define a method `String#real_words_in_string(dictionary)` that returns an 
    # array of all the subwords of the string that appear in the dictionary 
    # argument. The method should NOT return any duplicates.
  
    def real_words_in_string(dictionary)
        real_words = []
        dictionary.each do |ele|
            if self.include?(ele) && !real_words.include?(ele)
                real_words << ele
            end
        end
        return real_words
        
    end

    
  end