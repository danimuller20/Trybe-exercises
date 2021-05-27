USE sakila;
CREATE VIEW film_info AS
    SELECT 
        fa.actor_id, CONCAT(a.first_name, ' ', a.last_name), f.title
    FROM
        sakila.film_actor AS fa
            INNER JOIN
        sakila.actor AS a ON fa.actor_id = a.actor_id
            INNER JOIN
        sakila.film AS f ON f.film_id = fa.film_id
    ORDER BY first_name;

SELECT 
    *
FROM
    film_info;
