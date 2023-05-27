const { User, NewProduct } = require("../../models");
const { Conflict } = require("http-errors");

const AddOrder = async (req, res) => {
    const { userData, selectedProducts } = req.body;
    const { email } = userData;
    const user = await User.findOne({ email });
    if (user) {
      await NewProduct.create(
        selectedProducts.map((product) => ({ ...product, owner: user._id }))
      );
      throw new Conflict("Email is already in use");
    }
    // Создание нового пользователя
    const newUser = await User.create(userData);

    await NewProduct.create(
      selectedProducts.map((product) => ({ ...product, owner: newUser._id }))
    );

    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        newUser,
        selectedProducts,
      },
    });
};

module.exports = AddOrder;
