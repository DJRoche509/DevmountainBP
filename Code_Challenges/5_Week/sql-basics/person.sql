-- Create a table called person that records a person’s id, name, age, height (in cm , city, favorite_color. 
-- id should be an auto-incrementing id/primary key (use type: SERIAL)
CREATE TABLE person (
	id SERIAL PRIMARY KEY,
	name VARCHAR (40) NOT NULL,
    AGE INTEGER,
    height FLOAT,
	city VARCHAR(45),
	favorite_color VARCHAR (40)
);

-- Add 5 different people into the person database. Remember to not include the person_id because it should auto-increment
INSERT INTO person (name, age, height, city, favorite_color)
VALUES ('Pipo', 12, 120, 'New Orleans', 'orange'),
('Linda', 20, 156, 'York', 'yellow'),
('Paul', 17, 143, 'Queens', 'white'), 
('Jacky', 27, 165, 'Marlow', 'kaki'),
('Zola', 31, 150, 'Foster', 'black');

-- Select all the people in the person table by height from tallest to shortest.
SELECT * FROM person 
ORDER BY height DESC;

--Select all the people in the person table by height from shortest to tallest.
SELECT * FROM person 
ORDER BY height ASC;

-- Select all the people in the person table by age from oldest to youngest.
SELECT * FROM person 
ORDER BY age DESC;

-- Select all the people in the person table older than age 20.
SELECT * FROM person 
WHERE age > 20;

-- Select all the people in the person table that are exactly 18.
SELECT * FROM person 
WHERE age = 18;

-- Select all the people in the person table that are less than 20 and older than 30.
SELECT * FROM person 
WHERE age <20  OR age> 30;

-- Select all the people in the person table that are not 27 (use not equals).
SELECT * FROM person 
WHERE age <> 27 ;

-- Select all the people in the person table where their favorite color is not red.
SELECT * FROM person 
WHERE favorite_color != 'red' ;

-- Select all the people in the person table where their favorite color is not red and is not blue.
SELECT * FROM person 
WHERE favorite_color <> 'red' AND favorite_color != 'blue' ;

-- Select all the people in the person table where their favorite color is orange or green.
SELECT * FROM person 
WHERE favorite_color <> 'orange' OR favorite_color != 'green' ;

-- Select all the people in the person table where their favorite color is orange, green or blue (use IN)
SELECT * FROM person 
WHERE favorite_color IN ('orange','green','blue') ;

-- Select all the people in the person table where their favorite color is yellow or purple (use IN).
SELECT * FROM person 
WHERE favorite_color IN ('yellow','purple') ;

