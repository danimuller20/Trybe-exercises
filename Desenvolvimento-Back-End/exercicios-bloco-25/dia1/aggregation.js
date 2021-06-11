//? Exercício 1: Utilizando o estágio $match, escreva uma agregação para retornar somente os clientes do sexo "MASCULINO".
db.clientes.aggregate([{$match: {sexo: "MASCULINO"}}]);

//? Exercício 2: Utilizando o estágio $match, escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005.
db.clientes.aggregate([{$match: { $or: [{sexo: "FEMININO"}, {dataNascimento: { $gte: 1995, $lte: 2005}}]}}]);

//? Exercício 3: Utilizando o estágio $match, escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005, limitando a quantidade de documentos retornados em 5.
db.clientes.aggregate([{$match: { $or: [{sexo: "FEMININO"}, {dataNascimento: { $gte: 1995, $lte: 2005}}]}}, {$limit: 5}]);

//? Exercício 4: Conte quantos clientes do estado SC existem na coleção. Retorne um documento em que o campo _id contenha a UF e outro campo com o total.
db.clientes.aggregate([{$match: {"endereco.uf": "SC"}}, {$group: {_id: "$endereco.uf", count: {$sum: 1}}}]);

//? Exercício 5: Agrupe os clientes por sexo. Retorne o total de clientes de cada sexo no campo total.
db.clientes.aggregate([{$group: {_id: "$sexo", total: {$sum: 1}}}]);

//? Exercício 6: Agrupe os clientes por sexo e uf. Retorne o total de clientes de cada sexo no campo total.
db.clientes.aggregate([{$group: {_id: ["$sexo", "$endereco.uf"], total: {$sum: 1}}}]);

//Ou: Remove this
db.clientes.aggregate([{$group: {_id: {sexo: "$sexo", uf: "$endereco.uf"},total: { $sum: 1}}}]);

//? Exercício 7: Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída, de forma que se pareçam com o documento a seguir (não se importe com a ordem dos campos):
db.clientes.aggregate([
  {$group: {_id: {sexo: "$sexo", uf: "$endereco.uf"}, total: { $sum: 1}}},
  {$project: {_id: 0, "estado": "$_id.uf", "sexo": "$_id.sexo", "total": "$total" }}
]);

//? Exercício 8: Descubra quais são os 5 clientes que gastaram o maior valor.
db.vendas.aggregate([
  {$match: { status: {$in: ["ENTREGUE", "EM SEPARACAO"]}}},
  {$group: {_id: "$clienteId", valorTotal: {$sum: "$valorTotal"}}},
  {$sort: {valorTotal: -1}},
  {$limit: 5}
]);

//? Exercício 10: Descubra quantos clientes compraram mais de 5 vezes. Retorne um documento que contenha somente o campo clientes com o total de clientes.
db.vendas.aggregate([ 
{ $group: { _id: "$clienteId", totalCompras: { $sum: 1 } } },
{ $match: {totalCompras: {$gt: 5}}},
{ $count: "clientes" }]);

//? Exercício 11: Descubra quantos clientes compraram menos de três vezes entre os meses de Janeiro de 2020 e Março de 2020.

//? Exercício 12: Descubra quais as três ufs que mais compraram no ano de 2020. Retorne os documentos no seguinte formato:
const ex12 = {
  "totalVendas": 10,
  "uf": "SP"
}

//? Exercício 13 : Encontre qual foi o total de vendas e a média de vendas de cada uf no ano de 2019 . Ordene os resultados pelo nome da uf . Retorne os documentos no seguinte formato:
const ex13 = {
  "_id": "MG",
  "mediaVendas": 9407.129225352113,
  "totalVendas": 142
}