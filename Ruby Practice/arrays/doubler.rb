# Write a method that doubles each element in an array. Assume all elements of
# the array are integers.

def doubler(array)
    result = []
    array.each do |ele|
      result << ele * 2
    end
    result
  end