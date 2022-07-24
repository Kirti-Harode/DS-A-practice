normal join is a inner join, doesnot contain null values


here are two tables:
                teacher
id	    dept	    name	     phone	        mobile
101	     1	       Shrivell       2753	       07986 555 1234
102	     1	       Throd	      2754	       07122 555 1920
103	     1	       Splint	      2293	
104		          Spiregrain	  3287	
105	     2	      Cutflower	      3212	       07996 555 6574
106		           Deadyawn	      3345	




    dept
id	   name
1	   Computing
2	   Design
3	   Engineering



1)  this query will return common values only no null:

SELECT teacher.name, dept.name
FROM teacher INNER JOIN dept ON (teacher.dept=dept.id)

name	      name
Shrivell	Computing
Throd	    Computing
Splint	    Computing
Cutflower	Design


2) Use a different JOIN so that all teachers are listed. 
to get null for right table that is dept use left join: all left table and common from right table

select teacher.name, dept.name
from teacher left join dept on teacher.dept=dept.id

name	     name
Shrivell	Computing
Throd	    Computing
Splint	    Computing
Cutflower	Design


3) Use a different JOIN so that all dept are listed. same as abovr left join on dept and teacher => all dept and common null for dept

select dept.name, teacher.name
from dept left join teacher on dept.id = teacher.dept


name	       name
Computing	  Shrivell
Computing	  Throd
Computing	  Splint
Design	      Cutflower
Engineering	


or 
right join:  

select teacher.name, dept.name
from teacher right join dept on teacher.dept=dept.id

name	     name
Shrivell	Computing
Throd	    Computing
Splint	    Computing
Cutflower	Design
Engineering


4) show "none" istead of empty val: use COALESCE

select teacher.name, COALESCE(dept.name, 'None')dept
from teacher
left join dept on teacher.dept=dept.id