const HealthReport = require("../models/HealthReport");

// Controller function to get all health reports
exports.getAllHealthReports = async (req, res) => {
  try {
    const healthReports = await HealthReport.find();
    res.json(healthReports);
  } catch (error) {
    console.error("Error getting health reports:", error);
    res.status(500).json({ error: "Failed to get health reports" });
  }
};

// Controller function to get a single health report by ID
exports.getHealthReportById = async (req, res) => {
  try {
    const { id } = req.params;
    const healthReport = await HealthReport.findById(id);
    if (!healthReport) {
      return res.status(404).json({ error: "Health report not found" });
    }
    res.json(healthReport);
  } catch (error) {
    console.error("Error getting health report:", error);
    res.status(500).json({ error: "Failed to get health report" });
  }
};

// Controller function to create a new health report
exports.createHealthReport = async (req, res) => {
  try {
    const { patientId, report } = req.body;

    // Create a new health report
    const healthReport = new HealthReport({
      patientId,
      report,
    });

    // Save the health report to the database
    await healthReport.save();

    res.status(201).json({ message: "Health report created successfully" });
  } catch (error) {
    console.error("Error creating health report:", error);
    res.status(500).json({ error: "Failed to create health report" });
  }
};

// Controller function to update a health report
exports.updateHealthReport = async (req, res) => {
  try {
    const { id } = req.params;
    const { patientId, report } = req.body;

    // Find the health report by ID
    const healthReport = await HealthReport.findById(id);
    if (!healthReport) {
      return res.status(404).json({ error: "Health report not found" });
    }

    // Update the health report's properties
    healthReport.patientId = patientId;
    healthReport.report = report;

    // Save the updated health report to the database
    await healthReport.save();

    res.json({ message: "Health report updated successfully" });
  } catch (error) {
    console.error("Error updating health report:", error);
    res.status(500).json({ error: "Failed to update health report" });
  }
};

// Controller function to delete a health report
exports.deleteHealthReport = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the health report by ID and remove it
    const healthReport = await HealthReport.findByIdAndRemove(id);
    if (!healthReport) {
      return res.status(404).json({ error: "Health report not found" });
    }

    res.json({ message: "Health report deleted successfully" });
  } catch (error) {
    console.error("Error deleting health report:", error);
    res.status(500).json({ error: "Failed to delete health report" });
  }
};
