const store = require('./store');

function addLocal(local){
  return new Promise((resolve,reject) => {
    if(!local._id ||
      (!local.products_list || local.products_list.length===0) ||
      !local.local_name || !local.local_status){
      console.error("NO ES POSIBLE AGREGAR AL LOCAL");
      reject('Datos incorrectos');
      return false;
    }

    const newLocal = {
      ...local
    };
    store.add(newLocal);

    resolve(newLocal);
  });
};

function getLocals(id_local) {
  return new Promise((resolve,reject) => {
    resolve(store.list(id_local));
  });
};

module.exports = {
  addLocal,
  getLocals
};