// const getCurrent = async (req, res) => {
//   const { email } = req.user;
//   res.json({
//     status: "success",
//     code: 200,
//     data: {
//       user: {
//         email,
//       },
//     },
//   });
// };

// module.exports = getCurrent;

// const getProducts = async (req, res) => {

// }
const {Product} = require('../../models');

const getPizza = async (req, res, next) => {
    try {
      const products = await Product.find({});
      // console.log(products);
      res.json({
        status: 'success',
        code: 200,
      data: {
        products
      } })    
    } catch (error) {
      next(error);
    }
  
  }

  module.exports = getPizza;