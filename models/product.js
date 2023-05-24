const {Schema, model} = require('mongoose');
// const Joi = require('joi');

const productSchema = Schema({
    title: {
        type: String,
      },
      description: {
        type: String,
      },
      price: {
        type: Number,
      },
      image: {
        type: String,
      },
      amount: {
        type: Number,
      },
      owner: {
        type: Schema.Types.ObjectId, 
        ref: 'user',
        // required: [true, 'Product is required']
      }
}, {versionKey: false, timestamps: true})

// const userSignUpSchema = Schema({
//         password: {
//           type: String,
//           required: [true, 'Password is required'],
//         },
//         email: {
//           type: String,
//           required: [true, 'Email is required'],
//           unique: true,
//         },
//         token: {
//           type: String,
//           default: null,
//         }
// }, {versionKey: false, timestamps: true});

// const joiUserSchema = Joi.object({
//     name: Joi.string().required(),
//     email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
//     phone: Joi.number().required(),
//     address: Joi.string()
//   })

//   const joiLoginSchema = Joi.object({
//     email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
//     password: Joi.string().required(),
//   })
const Product = model('product', productSchema);
  const NewProduct = model('userProduct', productSchema);

  module.exports = {
    Product,
    NewProduct
    // joiUserSchema,
    // joiLoginSchema,
  };