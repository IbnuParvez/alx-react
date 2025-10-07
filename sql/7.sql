--Question 1
SELECT em.firstName, em.lastName, em.email, officeCode
FROM employees AS em
INNER JOIN offices AS of
ON em.officeCode = of.officeCode;

--Question 2
SELECT p.productName, p.productVendor, p.productLine
FROM products as p
LEFT JOIN productLine as p2
ON p.productLine = p2.productLine;

--Question 3
SELECT o.orderDate, o.shippedDate, o.status, o.customerNumber
FROM customers AS c
RIGHT JOIN orders AS o
ON c.customerName = o.customerName
LIMIT 10;
