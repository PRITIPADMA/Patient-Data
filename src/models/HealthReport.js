const mongoose = require("mongoose");

const healthReportSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  reportDate: {
    type: Date,
    default: Date.now,
  },
  symptoms: {
    type: String,
    required: true,
  },
  diagnosis: {
    type: String,
    required: true,
  },
  medication: {
    type: String,
    required: true,
  },
});

const HealthReport = mongoose.model("HealthReport", healthReportSchema);

module.exports = HealthReport;
