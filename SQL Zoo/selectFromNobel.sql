-- 1) Winners from 1950
-- Change the query shown so that it displays Nobel prizes for 1950.
SELECT yr, subject, winner
  FROM nobel
 WHERE yr = 1950
-- 2) Show who won the 1962 prize for literature.
SELECT winner
  FROM nobel
 WHERE yr = 1962
   AND subject = 'literature'
-- 3) Show the year and subject that won 'Albert Einstein' his prize.
SELECT yr, subject
FROM nobel
WHERE winner = 'Albert Einstein'
-- 4) Give the name of the 'peace' winners since the year 2000, including 2000.
SELECT winner
from nobel
where subject = 'peace' 
and yr > 1999
-- 5) Show all details (yr, subject, winner) of the literature prize winners for 1980 to 1989 inclusive.
select *
from nobel
where subject = 'literature'
and yr > 1979 and yr < 1990
-- 6) Show all details of the presidential winners:

-- Theodore Roosevelt
-- Thomas Woodrow Wilson
-- Jimmy Carter
-- Barack Obama
SELECT * FROM nobel
 WHERE 
   winner IN ('Theodore Roosevelt',
                  'Woodrow Wilson',
                  'Jimmy Carter',
                  'Barack Obama')
-- 7) Show the winners with first name John

SELECT winner FROM nobel
 WHERE 
   winner LIKE 'John%'


-- 8) Show the year, subject, and name of physics winners for 1980 together with the chemistry winners for 1984.
select *
from nobel
where (subject = 'physics' and yr = 1980) or (subject = 'chemistry' and yr = 1984)

-- 9) Show the year, subject, and name of winners for 1980 excluding chemistry and medicine
select *
from nobel
where yr = 1980 and subject not in ('chemistry')

-- 10) Show year, subject, and name of people who won a 'Medicine' prize in an early year (before 1910, not including 1910) together with winners of a 'Literature' prize in a later year (after 2004, including 2004)

select *
from nobel
where (subject = 'Medicine' and yr < 1910) or (subject = 'Literature' and yr > 2003)

-- 11) Find all details of the prize won by PETER GRÜNBERG
select *
from nobel
where winner = 'PETER GRÜNBERG'

-- 12) Find all details of the prize won by EUGENE O'NEILL
select *
from nobel
where winner = 'EUGENE O''NEILL'

Knights in order

-- 13) List the winners, year and subject where the winner starts with Sir. Show the the most recent first, then by name order.
SELECT winner, yr, subject 
FROM nobel 
WHERE winner LIKE 'Sir%' 
ORDER BY yr DESC;


-- 14) The expression subject IN ('chemistry','physics') can be used as a value - it will be 0 or 1.

-- Show the 1984 winners and subject ordered by subject and winner name; but list chemistry and physics last.

SELECT 
  winner, subject
FROM 
  nobel
WHERE 
  yr = 1984
ORDER BY 
  CASE WHEN subject IN ('Physics','Chemistry') THEN 1 ELSE 0 END, 
  subject, 
  winner

  