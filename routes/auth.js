const express = require("express");
const router = express.Router();

const {getProducts} = require("../controllers/auth")

router.get("/",getProducts);
// router.get("/overview",overView);

module.exports=router