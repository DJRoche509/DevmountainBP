-- Step 3: orders table

-- Create a table called orders that records: order_id, person_id, product_name, product_price, quantity.
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY , 
	person_id INT , 
    product_name VARCHAR (60), 
    product_price DECIMAL (10, 2), -- or NUMERIC
    quantity INTEGER
  );


-- Add 5 orders to the orders table. A) Make orders for at least two different people. B) person_id should be different for different people.
INSERT INTO orders (order_id,person_id,product_name,product_price,quantity)
VALUES  (1, 101,'heater', 98.54, 1),
        (2, 103,'broom', 11.25, 2),
        (3, 101,'tv', 320.10, 5),
        (4, 103,'charger', 10, 12),
        (5, 110,'battery', 67, 3);

-- Select all the records from the orders table.
SELECT * FROM orders;

-- Calculate the total number of products ordered.
SELECT SUM(quantity) FROM orders;

-- Calculate the total order price.
SELECT SUM(product_price * quantity) FROM orders;

-- Calculate the total order price by a single person_id.
SELECT SUM(product_price * quantity) FROM orders
WHERE person_id = 110;