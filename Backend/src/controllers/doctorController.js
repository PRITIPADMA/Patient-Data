const Doctor = require("../models/Doctor");

// Controller function to get all doctors
exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    console.error("Error getting doctors:", error);
    res.status(500).json({ error: "Failed to get doctors" });
  }
};

// Controller function to get a single doctor by ID
exports.getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }
    res.json(doctor);
  } catch (error) {
    console.error("Error getting doctor:", error);
    res.status(500).json({ error: "Failed to get doctor" });
  }
};

// Controller function to create a new doctor
exports.createDoctor = async (req, res) => {
  try {
    const { name, specialization } = req.body;

    // Create a new doctor
    const doctor = new Doctor({
      name,
      specialization,
    });

    // Save the doctor to the database
    await doctor.save();

    res.status(201).json({ message: "Doctor created successfully" });
  } catch (error) {
    console.error("Error creating doctor:", error);
    res.status(500).json({ error: "Failed to create doctor" });
  }
};

// Controller function to update a doctor
exports.updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, specialization } = req.body;

    // Find the doctor by ID
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    // Update the doctor's properties
    doctor.name = name;
    doctor.specialization = specialization;

    // Save the updated doctor to the database
    await doctor.save();

    res.json({ message: "Doctor updated successfully" });
  } catch (error) {
    console.error("Error updating doctor:", error);
    res.status(500).json({ error: "Failed to update doctor" });
  }
};

// Controller function to delete a doctor
exports.deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the doctor by ID and remove it
    const doctor = await Doctor.findByIdAndRemove(id);
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    res.json({ message: "Doctor deleted successfully" });
  } catch (error) {
    console.error("Error deleting doctor:", error);
    res.status(500).json({ error: "Failed to delete doctor" });
  }
};
