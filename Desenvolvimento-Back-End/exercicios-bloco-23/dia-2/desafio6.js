//? Retorne o total de super-heróis com 2.00m ou mais.

db.superheroes.countDocuments({"aspects.height": {$gte: 200}});
