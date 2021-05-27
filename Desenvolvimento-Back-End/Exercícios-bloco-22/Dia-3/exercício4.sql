USE sakila;

CREATE VIEW movies_languages AS
    SELECT 
        f.title AS `título do filme`,
        l.language_id AS `id do idioma`,
        l.`name` AS `idioma do filme`
    FROM
        film AS f
            INNER JOIN
        `language` AS l ON f.language_id = l.language_id;

SELECT 
    *
FROM
    movies_languages;
