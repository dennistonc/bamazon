CREATE DATABASE bamazon;

USE bamazon;

DROP TABLE products;

CREATE TABLE products (
	item_id INTEGER AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(50),
    department_name VARCHAR(50),
    price DECIMAL(5,2),
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gouche Paint Set", "Art", 28.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paint Brushes", "Art", 15.89, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Computer Desk", "Furniture", 89.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wallet", "Clothing", 29.95, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("String Lights", "Household", 15.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Phone Charm", "Miscellaneous", 6.80, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("UV Disinfector", "Household", 29.95, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nightstand", "Furniture", 98.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Desk Lamp", "Furniture", 28.55, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Oreos", "Food", 2.99, 10);

-- SELECT item_id FROM products GROUP BY item_id HAVING count(*)

-- DELETE FROM products
-- WHERE id=1;