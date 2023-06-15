const store = require('./store');

function addUser(user){
  return new Promise((resolve,reject) => {
    if(!user){
      console.error("NO ES POSIBLE AGREGAR AL USUARIO");
      reject('Datos incorrectos');
      return false;
    }

    const newUser = {
      ...user,
      creation_date: Date()
    };
    store.add(newUser);

    resolve(newUser);
  });
};

function getUsers(searchUserEmail) {
  return new Promise((resolve,reject) => {
    resolve(store.list(searchUserEmail));
  });
};

module.exports = {
  addUser,
  getUsers
};