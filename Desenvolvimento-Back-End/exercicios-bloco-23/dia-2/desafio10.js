//? Retorne o total de super-heróis com cabelos pretos ou carecas ( "No Hair" ).

db.superheroes.countDocuments({"aspects.hairColor": {$in: ['Black', 'No Hair']}});
