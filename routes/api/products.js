const express = require('express')
const {getPizza, addOrder, getSushi} = require('../../controllers');
// const {validation, wrapper, auth} = require('../../middlewares');

// const {
//   joiLoginSchema,
//   joiUserSchema,
// } = require("../../models");

const router = express.Router();

// router.post("/signup", validation(joiUserSchema), wrapper(signUp));

// router.post("/signin", validation(joiLoginSchema), wrapper(signIn));


router.get("/", getPizza);

router.get("/sushi", getSushi);

router.post("/order", addOrder);

module.exports = router;
