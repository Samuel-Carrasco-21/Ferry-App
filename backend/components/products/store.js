const Model = require('./model');

function addProduct(product){
  const myProduct = new Model(product);
  myProduct.save();
};

async function getProducts(id_product){
  return new Promise(() => {
    
  });
  let filter = {};
    if(id_product!==null){
      filter = {_id:id_product};
    }
    const locals = await Model.find(filter);
    return locals;
  
};

module.exports = {
  add: addProduct,
  list: getProducts
};