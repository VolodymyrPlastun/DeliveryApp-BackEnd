const express = require('express')
const {getPizza, addOrder, getSushi} = require('../../controllers');
const { wrapper} = require('../../middlewares');

const router = express.Router();


router.get("/", wrapper(getPizza));

router.get("/sushi", wrapper(getSushi));

router.post("/order", wrapper(addOrder));

module.exports = router;
