const store = require('./store');

function addProduct(product){
  return new Promise((resolve,reject) => {
    if(!product){
      console.error("NO ES POSIBLE AGREGAR AL PRODUCTO");
      reject('Datos incorrectos');
      return false;
    }

    const newProduct = {
      ...product
    };
    store.add(newProduct);

    resolve(newProduct);
  });
};

function getProducts(id_product) {
  return new Promise((resolve,reject) => {
    resolve(store.list(id_product));
  });
};

module.exports = {
  addProduct,
  getProducts
};