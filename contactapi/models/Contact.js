import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ContactSchema = new Schema({
  contactId: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  mobile:{
    type: String,
    required: true,
    maxLength: 10
  },
  email:{
    type: String
  },
  imageURL:{
    type: String
  }
})

const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
export default Contact;