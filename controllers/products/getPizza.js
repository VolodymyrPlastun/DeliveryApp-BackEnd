const {Product} = require('../../models');

const getPizza = async (req, res) => {
      const products = await Product.find({});
      res.json({
        status: 'success',
        code: 200,
      data: {
        products
      } })    
  }

  module.exports = getPizza;