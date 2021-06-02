//? Selecione todos os super-heróis que não sejam humanos ou que não sejam maiores do que 1.80m .

db.superheroes.find({$nor: [ {"race": 'Human'}, {"aspects.height": {$gt: 180}} ]});
