const Model = require('./model');

function addLocal(local){
  const myLocal = new Model(local);
  myLocal.save();
};

async function getLocals(id_local){
  let filter = {};
  if(id_local!==null){
    filter = {_id:id_local};
  }
  const locals = await Model.find(filter);
  return locals;
};

module.exports = {
  add: addLocal,
  list: getLocals
};