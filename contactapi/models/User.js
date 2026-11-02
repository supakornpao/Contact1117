import mongoose from 'mongoose'
import bcrypt from 'bcryptjs';
import crypto from 'crypto'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
})


UserSchema.methods.comparePassword = function (candidatePassword) {
  return crypto.createHash('md5').update(candidatePassword).digest('hex') === this.password;
};

const User = mongoose.models.Users || mongoose.model('User', UserSchema)
export default User