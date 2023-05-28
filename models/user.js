const {Schema, model} = require('mongoose');

const userSchema = Schema({
    name: {
        type: String,
        required: [true, 'Set name for user'],
      },
      email: {
        type: String,
        required: [true, 'Set email for user'],
      },
      phone: {
        type: String,
        required: [true, 'Set phone for user'],
      },
      address: {
        type: String,
        required: [true, 'Set address for user'],
      },
}, {versionKey: false, timestamps: true})

  const User = model('user', userSchema);

  module.exports = {
    User,
  };