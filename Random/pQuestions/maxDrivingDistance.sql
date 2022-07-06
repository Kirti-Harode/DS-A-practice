-- it's so of like a uber or lyft where you have 1 table of users. 
-- then a 2nd table that has the rides the users has taken with data of user_id and city_id, miles traveled for each ride
-- so they want you to find the top 100 users had drove the highest distance total.

select user.id, sum(distance) as distance_traveled 
from rides
join users on ride.user_id = users.id
group by users.id
order by distance_traveled DESC, users.name ASC 
limit 100


select users.name, distance_traveled as __ 
from users 
join(
    SELECT users.id == id, SUM(rides.distance) as distance_traveled
    FROM users 
    JOIN rides on users.id = rides.user_id 
    GROUP BY users.id
)
ORDER BY users.name 
LIMIT 100


select users.name, sum(distance) as distance_traveled  
from rides 
join users on rides.user_id = users.id 
group by users.id 
order by distance_traveled DESC, users.name ASC  
limit 100;

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
order by distance_traveled desc, name asc;



