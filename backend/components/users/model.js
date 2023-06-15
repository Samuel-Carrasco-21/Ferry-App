const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myUser = new Schema({
  user_name:String,
  user_email:String,
  user_password:String,
  creation_date:Date
});

const model = mongoose.model('User',myUser);

module.exports = model;