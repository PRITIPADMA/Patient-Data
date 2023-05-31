const express = require("express");
const router = express.Router();
const healthReportController = require("../controllers/healthReportController");

// Get all health reports
router.get("/", healthReportController.getAllHealthReports);

// Get a specific health report by ID
router.get("/:id", healthReportController.getHealthReportById);

// Create a new health report
router.post("/", healthReportController.createHealthReport);

// Update a health report
router.put("/:id", healthReportController.updateHealthReport);

// Delete a health report
router.delete("/:id", healthReportController.deleteHealthReport);

module.exports = router;
