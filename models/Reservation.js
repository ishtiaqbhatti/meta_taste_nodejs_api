const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  restaurantName: { type: String },
  totalPerson: { type: Number },
  preferredTableNo: { type: String },
  arrivalTime: { type: String },
  date: { type: Date },
});

const Reservation = mongoose.model("Reservation", ReservationSchema);

export default Reservation;
