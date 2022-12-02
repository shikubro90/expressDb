const express = require("express");

const router = express.Router();


const {mongoCollections} = require("../controllers/mongoCollections")

router.get("/mongocollections",mongoCollections);

module.exports = router