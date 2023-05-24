const {Schema, model} = require('mongoose');
// const Joi = require('joi');

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
        type: Number,
        required: [true, 'Set phone for user'],
      },
      address: {
        type: String,
        required: [true, 'Set address for user'],
      },
}, {versionKey: false, timestamps: true})

// const joiUserSchema = Joi.object({
//     name: Joi.string().required(),
//     email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
//     phone: Joi.number().required(),
//     address: Joi.string()
//   });

  const User = model('user', userSchema);

  module.exports = {
    User,
    // joiUserSchema,
  };