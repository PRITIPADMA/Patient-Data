const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");

// Controller function for patient registration
exports.patientRegister = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username is already taken
    const existingPatient = await Patient.findOne({ username });
    if (existingPatient) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new patient
    const patient = new Patient({
      username,
      password: hashedPassword,
    });

    // Save the patient to the database
    await patient.save();

    res.status(201).json({ message: "Patient registered successfully" });
  } catch (error) {
    console.error("Error registering patient:", error);
    res.status(500).json({ error: "Failed to register patient" });
  }
};

// Controller function for patient login
exports.patientLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the patient exists in the database
    const patient = await Patient.findOne({ username });
    if (!patient) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare the provided password with the stored password hash
    const isPasswordValid = await bcrypt.compare(password, patient.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: patient._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    console.error("Error logging in as patient:", error);
    res.status(500).json({ error: "Failed to log in as patient" });
  }
};

// Controller function for doctor registration
exports.doctorRegister = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username is already taken
    const existingDoctor = await Doctor.findOne({ username });
    if (existingDoctor) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new doctor
    const doctor = new Doctor({
      username,
      password: hashedPassword,
    });

    // Save the doctor to the database
    await doctor.save();

    res.status(201).json({ message: "Doctor registered successfully" });
  } catch (error) {
    console.error("Error registering doctor:", error);
    res.status(500).json({ error: "Failed to register doctor" });
  }
};

// Controller function for doctor login
exports.doctorLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the doctor exists in the database
    const doctor = await Doctor.findOne({ username });
    if (!doctor) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare the provided password with the stored password hash
    const isPasswordValid = await bcrypt.compare(password, doctor.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: doctor._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    console.error("Error logging in as doctor:", error);
    res.status(500).json({ error: "Failed to log in as doctor" });
  }
};
