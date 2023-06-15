const Model = require('./model');

function addProduct(product){
  const myProduct = new Model(product);
  myProduct.save();
};

async function getProducts(objetoOne){
  const objetoBusqueda = JSON.parse(objetoOne);
  const {id_product,id_local} = objetoBusqueda;
  return new Promise((resolve,reject) => {
    let filter = {};
    if(id_product!==null){
      filter = {_id:id_product};
    }
    Model.find(filter)
      .populate('_local')
      .exec((err,populated) => {
        if(err){
          reject(err);
          return false;
        }
        resolve(populated);
      });
  });
  
};

module.exports = {
  add: addProduct,
  list: getProducts
};