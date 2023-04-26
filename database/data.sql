-- Use SQL insert statements to add any
-- starting/dummy data to your database tables

-- EXAMPLE:

--  insert into "todos"
--    ("task", "isCompleted")
--    values
--      ('Learn to code', false),
--      ('Build projects', false),
--      ('Get a job', false);
insert into "restaurants"
          ("name", "location", "priceRange")
          values
            ('Cava', 'San Francisco', 2)
          returning *;

insert into "reviews"
          ("restaurantId", "name", "review", "rating")
          VALUES
            (1, 'Deborah', 'terrible restaurant', 1),
            (1, 'Joann', 'Not too shabby', 3),
            (1, 'Lmberto', 'Thankful for this opportunity', 4)
            returning *;
