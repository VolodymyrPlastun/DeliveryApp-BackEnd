const express = require('express')
const {getProducts, addOrder} = require('../../controllers');
// const {validation, wrapper, auth} = require('../../middlewares');

// const {
//   joiLoginSchema,
//   joiUserSchema,
// } = require("../../models");

const router = express.Router();

// router.post("/signup", validation(joiUserSchema), wrapper(signUp));

// router.post("/signin", validation(joiLoginSchema), wrapper(signIn));


router.get("/", getProducts);
router.post("/order", addOrder);

module.exports = router;
