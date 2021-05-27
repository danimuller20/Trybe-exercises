USE sakila;
CREATE VIEW film_with_categories AS
SELECT 
    f.title, fc.category_id, c.name
FROM
    category AS c
        INNER JOIN
    film_category AS fc ON c.category_id = fc.category_id
        INNER JOIN
    film AS f ON f.film_id = fc.film_id
ORDER BY f.title;

SELECT * FROM film_with_categories;
