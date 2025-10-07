SELECT productCode, quantityOrdered, SUM(totalPrice) AS total
FROM orderdetails
GROUP BY productCode, quantityOrdered;
