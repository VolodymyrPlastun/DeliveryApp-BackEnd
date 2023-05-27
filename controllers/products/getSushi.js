const {Sushi} = require('../../models');

const getSushi = async (req, res) => {
      const products = await Sushi.find({});
      res.json({
        status: 'success',
        code: 200,
      data: {
        products
      } })    
  
  };

  module.exports = getSushi;