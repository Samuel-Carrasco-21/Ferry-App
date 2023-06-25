const Model = require('./model');

function addUser(user){
  const myUser = new Model(user);
  myUser.save();
}

async function getUsers(searchUserEmail){
  let filter = {};
  if(searchUserEmail!==null){
    filter = {userEmail:searchUserEmail};
  }
  const usuarios = await Model.findOne(filter).exec();
  return usuarios;
};

module.exports = {
  add: addUser,
  list: getUsers
};