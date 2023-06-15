const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myProduct = new Schema({
  _id:Number,
  product_name:String,
  product_status:String,
  quantity_available:Number,
  product_price:Number,
  product_logo:String
});

const model = mongoose.model('Product',myProduct);

module.exports = model;
