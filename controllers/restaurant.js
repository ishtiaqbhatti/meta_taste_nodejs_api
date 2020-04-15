const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Restaurant = require("../models/Restaurant");

exports.addRestaurant = asyncHandler(async (req, res, next) => {
  const data = require("./data");
  data.forEach(async (item) => {
    await Restaurant.create(item);
  });
});

exports.getRestaurants = asyncHandler(async (req, res, next) => {
  const restaurants = await Restaurant.find({});
  return res.status(200).json({
    success: 1,
    data: restaurants,
  });
});
