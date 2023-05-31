const Patient = require("../models/Patient");

// Controller function to get all patients
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    console.error("Error getting patients:", error);
    res.status(500).json({ error: "Failed to get patients" });
  }
};

// Controller function to get a single patient by ID
exports.getPatientById = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findById(id);
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    res.json(patient);
  } catch (error) {
    console.error("Error getting patient:", error);
    res.status(500).json({ error: "Failed to get patient" });
  }
};

// Controller function to create a new patient
exports.createPatient = async (req, res) => {
  try {
    const { name, age, gender } = req.body;

    // Create a new patient
    const patient = new Patient({
      name,
      age,
      gender,
    });

    // Save the patient to the database
    await patient.save();

    res.status(201).json({ message: "Patient created successfully" });
  } catch (error) {
    console.error("Error creating patient:", error);
    res.status(500).json({ error: "Failed to create patient" });
  }
};

// Controller function to update a patient
exports.updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, gender } = req.body;

    // Find the patient by ID
    const patient = await Patient.findById(id);
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }

    // Update the patient's properties
    patient.name = name;
    patient.age = age;
    patient.gender = gender;

    // Save the updated patient to the database
    await patient.save();

    res.json({ message: "Patient updated successfully" });
  } catch (error) {
    console.error("Error updating patient:", error);
    res.status(500).json({ error: "Failed to update patient" });
  }
};

// Controller function to delete a patient
exports.deletePatient = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the patient by ID and remove it
    const patient = await Patient.findByIdAndRemove(id);
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }

    res.json({ message: "Patient deleted successfully" });
  } catch (error) {
    console.error("Error deleting patient:", error);
    res.status(500).json({ error: "Failed to delete patient" });
  }
};
