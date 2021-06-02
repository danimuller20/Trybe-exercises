//? Retorne o total de super-heróis menores que 1.80m.

db.superheroes.countDocuments({"aspects.height": {$lt: 180}});
