
# Define a method `titleize(title)` that capitalizes each word in a string like 
# a book title.  First word in a title should always be capitalized.  Do not 
# capitalize words like 'a', 'and', 'of', 'over' or 'the'.

def titleize(title)
    # 
    otherWords = ['a', 'and', 'of', 'over', 'the']
    words = title.split(" ")
    capitalized = []
  
    capitalized << words[0].capitalize
  
    (1...words.length).each do |i|
      if !otherWords.include?(words[i])
        capitalized << words[i].capitalize
      else
        capitalized << words[i]
      end
    end
    return capitalized.join(" ")
  end
  