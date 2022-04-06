# Write a method that returns the factors of a number in ascending order.

def factors(num)
    facts = []
    return nil if num < 0
    (1..num).each do |n|
      if num % n == 0
        facts << n
      end
    end
    facts
end