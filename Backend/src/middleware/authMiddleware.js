const jwt = require("jsonwebtoken");
const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");

// Middleware to authenticate the user
exports.authenticateUser = async (req, res, next) => {
  try {
    // Get the authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: "Authorization header missing" });
    }

    // Extract the token from the authorization header
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Token missing" });
    }

    // Verify the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!decodedToken) {
      return res.status(401).json({ error: "Invalid token" });
    }

    // Check if the user is a patient
    const patient = await Patient.findById(decodedToken.userId);

    if (patient) {
      req.user = patient; // Set the user object in the request
      return next(); // Proceed to the next middleware or route handler
    }

    // Check if the user is a doctor
    const doctor = await Doctor.findById(decodedToken.userId);

    if (doctor) {
      req.user = doctor; // Set the user object in the request
      return next(); // Proceed to the next middleware or route handler
    }

    return res.status(401).json({ error: "Unauthorized" });
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(500).json({ error: "Failed to authenticate user" });
  }
};
