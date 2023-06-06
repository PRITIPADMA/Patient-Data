const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Patient registration route
router.post("/patient/register", authController.patientRegister);

// Patient login route
router.post("/patient/login", authController.patientLogin);

// Doctor registration route
router.post("/doctor/register", authController.doctorRegister);

// Doctor login route
router.post("/doctor/login", authController.doctorLogin);

module.exports = router;
