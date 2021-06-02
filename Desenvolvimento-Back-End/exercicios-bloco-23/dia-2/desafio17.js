//? Retorne o total de documentos que contêm o campo hairColor.

db.superheroes.countDocuments({'aspects.hairColor': {$exists: true}});
