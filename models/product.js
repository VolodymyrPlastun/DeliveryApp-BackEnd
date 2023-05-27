const {Schema, model} = require('mongoose');

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
      }
}, {versionKey: false, timestamps: true})

  const Product = model('product', productSchema);
  const Sushi = model('sushi', productSchema, 'sushi');
  const NewProduct = model('userProduct', productSchema);

  module.exports = {
    Product,
    NewProduct,
    Sushi
  };