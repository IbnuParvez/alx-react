SELECT checkNumber, MAX(highestamount) 	AS maximumValue
FROM payments
GROUP BY checkNumber;
