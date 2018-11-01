const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  excelId: String,
  name: String,
  nameAr: String,
  birthDate: Date,
  gender: String,
  isActive: Boolean,
});
module.exports = mongoose.model('Users', UserSchema);
