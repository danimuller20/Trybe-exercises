//? Retorne o total de documentos que não contêm o campo race.

db.superheroes.countDocuments({race: {$exists: false}});
