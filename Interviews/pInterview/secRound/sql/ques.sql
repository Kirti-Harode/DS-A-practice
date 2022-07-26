Like how movies relates to actors, directions, etc.

I think my was blog posts and users, comments tables.
each blog could have tags on what category it’s about
1) One was like select all the blogs posts written by this user
2) I think another was select all posts with category science or math

3) the hardest question was like select all users with the more than 5 blogs post in scienc or math category
But that was a bonus question they said you didn’t need to answer
So you needed to do a group by and having

Make sure to know left joins and null values too

blogs => [id, category, autherid, post],  posts=> [id, autherid], comments => [autherid, postid], users => [id, postId, name]

select post from blogs join users on authorid= id where name='givename'
select post from blogs where category in ('1', '2')
select name from users join blogs id=authorId where category in ('science' , 'math') group by name having count(post) >= 5