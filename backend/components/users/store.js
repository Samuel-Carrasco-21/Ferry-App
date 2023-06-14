const Model = require('./model');

function addUser(user){
  const myUser = new Model(user);
  myUser.save();
}

async function getUsers(searchUserEmail){
  let filter = {};
  if(searchUserEmail!==null){
    filter = {user_email:searchUserEmail};
  }
  const usuarios = await Model.find(filter);
  // console.log('users: ',usuarios);
  return usuarios;
};

module.exports = {
  add: addUser,
  list: getUsers
};