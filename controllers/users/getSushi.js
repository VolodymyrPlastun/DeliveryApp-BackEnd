const {Sushi} = require('../../models');

const getSushi = async (req, res, next) => {
    try {
      const products = await Sushi.find({});
    //   console.log(products);
      res.json({
        status: 'success',
        code: 200,
      data: {
        products
      } })    
    } catch (error) {
      next(error);
    }
  
  };

  module.exports = getSushi;