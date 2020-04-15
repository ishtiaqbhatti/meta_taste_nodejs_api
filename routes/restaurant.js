const express = require("express");
const { addRestaurant, getRestaurants } = require("../controllers/restaurant");

const router = express.Router();

router.post("/", addRestaurant);

router.get("/", getRestaurants);

module.exports = router;
