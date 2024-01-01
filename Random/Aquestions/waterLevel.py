# # Astrome:

# The problem is an over simplification of the flow of liquid. - A terrain is given as a grid of cells of random elevations. The grid is always odd sized and is always a square. - A liquid is poured at the central cell. Water can flow only north-south or east-west; not diagnonally. - At the first step, the water level is the same as the central cell. - Water from one cell flows to a neighbouring cell if the level of water is equal to greater than the elevation of the neighbouring cell. - When the water flows to the neighbouring cell, the level of water is maintained. - If the water cannot flow to any new cell, the water level rises. - The simulation stops when the water reaches the end of the domain. - The output consists of the domain represented by . and W representing dry and wet terrain.

# Below is an example

# Input Format

# 7 494 88 89 770 984 726 507 340 959 220 301 639 280 290 666 906 632 824 127 505 787 673 499 843 172 193 613 154 544 211 124 60 575 572 389 635 170 174 946 593 314 300 620 167 931 780 416 954 275

# Water level and location of water:``

# ----------

# Current water level: 172

# .......

# .......

# .......

# ...W...

# ...W...

# .......

# .......

# ----------

# Current water level: 172

# .......

# .......

# .......

# ...W...

# ..WW...

# .......

# .......

# ----------

# Current water level: 172

# .......

# .......

# .......

# ...W...

# ..WW...

# .......

# .......

# Cannot flow, increasing water level to 173

# ----------

# Current water level: 173

# .......

# .......

# .......

# ...W...

# ..WW...

# .......

# .......

# Cannot flow, increasing water level to 174

# ----------

# Current water level: 174

# .......

# .......

# .......

# ...W...

# ..WW...

# ..W....

# .......

# ----------

# Current water level: 174

# .......

# .......

# .......

# ...W...

# ..WW...

# .WW....

# .......

# ----------

# Current water level: 174

# .......

# .......

# .......

# ...W...

# ..WW...

# .WW....

# .W.....

# ----------

# Current water level: 174 Reached edge, exiting. Solution:

# Output Format

# .......

# .......

# .......

# ...W...

# ..WW...

# .WW....

# .W.....

# Constraints: First line of the input has dimension n of (n X n) matrix. Followed by the matrix itself as shown below in the sample input.



import numpy as np
n = int(input())
levels = np.full((n,n),0)
visited = np.full((n,n), False)
for _ in range(n):
    levels[_] = np.array(list(map(int, input().split())))

center = n/2

stack = [(center, center)]
bound = set()
found_wall =  False

def is_valid(row, col) :
    if row < 0 or row >= n or col < 0 or col >= n :
        return False
    return True

count = 0
def water(level) :
    global stack, levels, bound, found_wall, count
    # print(stack)
    # print("working", count)
    count += 1
    temp = []
    while stack :
        row, col = stack.pop()
        if levels[row][col] <= level:
            levels[row][col] = -1
            visited[row][col] = True
            if row == 0 or row == n-1 or col == 0 or col == n-1:
                found_wall = True
        else:
            bound.add((row, col))
        if levels[row][col] == -1 :
            if is_valid(row+1, col) and not visited[row+1][col]:
                temp.append((row+1, col))
            if is_valid(row-1, col) and not visited[row-1][col]:
                temp.append((row-1, col))
            if is_valid(row, col-1) and not visited[row][col-1]:
                temp.append((row, col-1))
            if is_valid(row, col+1) and not visited[row][col+1]:
                temp.append((row, col+1))
    stack = temp
    if stack and not found_wall:
        water(level)
water(levels[center, center])

def if_found():
    global bound, stack
    if found_wall:
        return
    else:
        lst = []
        for row, col in bound:
            lst.append(levels[row][col])
        level = min(lst)

        stack = list(bound)
        bound = set()
        water(level)
        if_found()
if_found()
for i in range(n):
    for j in range(n):
        if levels[i][j] == -1:
            print("w", end="")
        else:
            print('.', end="")

    print()
