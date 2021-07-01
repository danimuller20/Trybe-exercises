const connections = require('./connections');
const { ObjectId } = require('mongodb');

const insertUser = async (firstName, lastName, email, password) => {
  const newUser = await connections()
    .then((db) => db.collection('users').insertOne({firstName, lastName, email, password}));

    return {
      id: newUser.insertedId,
      firstName: newUser.ops[0].firstName,
      lastName: newUser.ops[0].lastName,
      email: newUser.ops[0].email,
    };
}

const getUser = async () => {
  const user = await connections()
  .then((db) => db.collection('users').find().toArray());
  
  return user;
}

const getUserById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const user = await connections()
  .then((db) => db.collection('users').findOne(new ObjectId(id)));
  return user;
}

const editUser = async (id, firstName, lastName, email, password) => {
  if (!ObjectId.isValid(id)) return null;
  console.log(id);
  const user = await connections()
  .then((db) => db.collection('users').updateOne( {_id: ObjectId(id)},
    {$set: {firstName, lastName, email, password}})
    .then(() => ({_id: id, firstName, lastName, email})));
    console.log(user)
  return user;
}


module.exports = {
  insertUser,
  getUser,
  getUserById,
  editUser,
};