const { User, NewProduct } = require("../../models");

const AddOrder = async (req, res) => {
    const { userData, selectedProducts } = req.body;
    const { email } = userData;
    const user = await User.findOne({email});
    if(user) {
      await User.findByIdAndUpdate(user._id, userData);
      await NewProduct.create(
        selectedProducts.map((product) => ({ ...product, owner: user._id }))
      );
    }
   if (!user) {
      const newUser = await User.create(userData);
      await NewProduct.create(
        selectedProducts.map((product) => ({ ...product, owner: newUser._id }))
      );
    }

    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        userData,
        selectedProducts,
      },
    });
};

module.exports = AddOrder;
