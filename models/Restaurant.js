const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: { type: String },
  desc: { type: String },
  image: { type: String },
  location: { type: String },
  meals: [
    {
      mealType: { type: String },
      name: { type: String },
      desc: { type: String },
      calories: { type: String },
      price: { type: String },
      image: { type: String },
    },
  ],
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;
