const { Schema } = require("mongoose");

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  role: String, // e.g., 'admin' or 'user'
});
module.exports={UserSchema};