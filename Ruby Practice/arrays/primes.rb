# Define a method `primes(num)` that returns an array of the first "num" primes.
# You may wish to use an `is_prime?` helper method.

def primes(num)
    prime_nums = []
     i = 2
     while prime_nums.length < num
      if is_prime?(i)
        prime_nums << i 
      end
      i += 1
     end
     prime_nums
  end
  
  def is_prime?(n)
    return false if n < 2 
    (2...n).each do |i|
      return false if n % i == 0
    end
    return true
  end
  