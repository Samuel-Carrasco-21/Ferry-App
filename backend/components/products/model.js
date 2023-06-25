const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myProduct = new Schema({
  _id:Number,
  productName:String,
  productStatus:Boolean,
  quantityAvailable:Number,
  productPrice:Number,
  productLogo:String
});

const model = mongoose.model('Product',myProduct);

module.exports = model;
