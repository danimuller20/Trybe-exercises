USE sakila;

CREATE INDEX postal_code_index ON address(`postal_code`);

SELECT 
    *
FROM
    sakila.address
WHERE
    postal_code = '36693';
-- Custo da querry com index: 1.20 

DROP INDEX postal_code_index ON address;

SELECT 
    *
FROM
    sakila.address
WHERE
    postal_code = '36693';
-- Custo da querry sem index: 126.60
