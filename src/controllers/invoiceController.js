const Invoice = require("../models/Invoice");

// Controller function to get all invoices
exports.getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (error) {
    console.error("Error getting invoices:", error);
    res.status(500).json({ error: "Failed to get invoices" });
  }
};

// Controller function to get a single invoice by ID
exports.getInvoiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findById(id);
    if (!invoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }
    res.json(invoice);
  } catch (error) {
    console.error("Error getting invoice:", error);
    res.status(500).json({ error: "Failed to get invoice" });
  }
};

// Controller function to create a new invoice
exports.createInvoice = async (req, res) => {
  try {
    const { patientId, amount, description } = req.body;

    // Create a new invoice
    const invoice = new Invoice({
      patientId,
      amount,
      description,
    });

    // Save the invoice to the database
    await invoice.save();

    res.status(201).json({ message: "Invoice created successfully" });
  } catch (error) {
    console.error("Error creating invoice:", error);
    res.status(500).json({ error: "Failed to create invoice" });
  }
};

// Controller function to update an invoice
exports.updateInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const { patientId, amount, description } = req.body;

    // Find the invoice by ID
    const invoice = await Invoice.findById(id);
    if (!invoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }

    // Update the invoice's properties
    invoice.patientId = patientId;
    invoice.amount = amount;
    invoice.description = description;

    // Save the updated invoice to the database
    await invoice.save();

    res.json({ message: "Invoice updated successfully" });
  } catch (error) {
    console.error("Error updating invoice:", error);
    res.status(500).json({ error: "Failed to update invoice" });
  }
};

// Controller function to delete an invoice
exports.deleteInvoice = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the invoice by ID and remove it
    const invoice = await Invoice.findByIdAndRemove(id);
    if (!invoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }

    res.json({ message: "Invoice deleted successfully" });
  } catch (error) {
    console.error("Error deleting invoice:", error);
    res.status(500).json({ error: "Failed to delete invoice" });
  }
};
