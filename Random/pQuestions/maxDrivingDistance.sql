-- it's so of like a uber or lyft where you have 1 table of users. 
-- then a 2nd table that has the rides the users has taken with data of user_id and city_id, miles traveled for each ride
-- so they want you to find the top 100 users had drove the highest distance total.


-- Final1:
select u.name as name, sum(r.distance) as distance_traveled 
from users u 
inner join rides r on u.id = r.user_id 
group by u.id 
order by distance_traveled desc, name asc;


-- Final2: 
select u.name as name, t.distance_traveled as distance_traveled 
from users u 
inner join (select user_id, sum(distance) as distance_traveled 
            from rides 
            group by user_id) as t on u.id = t.user_id 
order by distance_traveled desc, name asc
LIMIT 100;



