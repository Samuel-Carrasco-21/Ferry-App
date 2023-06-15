const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myLocal = new Schema({
  _id:Number,
  products_list:[
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    }
  ],
  local_name:String,
  local_status:Boolean,
  local_logo:String
});

const model = mongoose.model('Local',myLocal);

module.exports = model;
