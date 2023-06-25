const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myLocal = new Schema({
  productsList:[Schema.Types.Mixed],
  localName:String,
  localStatus:Boolean,
  localLogo:String,
	localLocation:String
});

const model = mongoose.model('Local',myLocal);

module.exports = model;
