const Model = require('./model');

function addProduct(product){
  const myProduct = new Model(product);
  myProduct.save();
};

async function getProducts(id_product){
  let filter = {};
  if(id_product!==null){
    filter = {_id:id_product};
  }
  const product = await Model.find(filter);
  return product;
};

module.exports = {
  add: addProduct,
  list: getProducts
};