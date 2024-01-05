# web development server side
# print statement
print('hello world')

#conditional and indentation
if 5 > 2:
    print("Five is greater than 2")

# no declaration of variables, assign value with declaring
x = 5   #int type
y = 'Hello' # string type
print(x)
print(y)

"""
This is a comment
written in
more than just one line
"""

a = int(3) #3
b = float(3) #3.0
c = str(3)  #'3'

print(type(a))   #<class 'int'>
print(type(b))
print(type(c))

# case sensitive
a = 3
A = "Sally"
#A will not overwrite a

# snake case
myVar = 'camelcase'
my_var = 'snakecase'
myvar2 = 'var name with num'
MyNameIs = 'pascal case'

# multi variables, multi val
x, y, z = 'hello', 'world', '!'
print(x)
print(y)
print(z)

# one value to multiple var
x = y = z = 'Hey there!!'

# unpack a collection
fruits = ['banana', 'apple', 'peach']
x, y, z = fruits
print(x)
print(y)
print(z)

# print multi var at once
print(x, y, z)

print(x + y + z)

# + operator
x = 3
y = 5
print(x+y)

# Global variables
