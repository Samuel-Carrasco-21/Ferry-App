const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myUser = new Schema({
  userName:String,
  userEmail:String,
  userPassword:String,
  creationDate:Date
});

const model = mongoose.model('User',myUser);

module.exports = model;