USE sakila;

CREATE FULLTEXT INDEX name_index ON category(`name`);

SELECT 
    *
FROM
    sakila.category
WHERE
    MATCH (name) AGAINST ('action' );
-- Custo da query: 1.20

SELECT 
    *
FROM
    sakila.category
WHERE
    name LIKE '%action%';
-- Custo da query: 4.20
