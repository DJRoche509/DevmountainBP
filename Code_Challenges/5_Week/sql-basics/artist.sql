-- Step 4: artist table
-- In the artist.sql file, write out the code for the following problems:


-- artist TABLE already exists as follow:
-- artist
--      artist_id            INTEGER
--      name                 VARCHAR (120)


-- Add 3 new artists to the artist table. 
INSERT INTO artist
VALUES ()

--Add 3 new artists tot the artist table
INSERT INTO artist (name) VALUES ('carimi');

-- Select 10 artists in reverse alphabetical order.
SELECT name FROM artist
ORDER BY name DESC
LIMIT 10 ;

-- Select 5 artists in alphabetical order.
SELECT name FROM artist
ORDER BY name ASC
LIMIT 5 ;

-- Select all artists that start with the word ‘Black’.
SELECT * FROM artist
WHERE name LIKE 'Black%';

-- Select all artists that contain the word ‘Black’.
SELECT * FROM artist
WHERE name LIKE '%Black%';