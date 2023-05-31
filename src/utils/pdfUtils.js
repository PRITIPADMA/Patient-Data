const PDFDocument = require("pdfkit");
const fs = require("fs");

// Function to generate a PDF document with given content
exports.generatePDF = (content, filePath) => {
  return new Promise((resolve, reject) => {
    try {
      const pdfDoc = new PDFDocument();

      // Pipe the PDF document to a writable stream
      const writeStream = fs.createWriteStream(filePath);
      pdfDoc.pipe(writeStream);

      // Write the content to the PDF document
      pdfDoc.text(content);

      // Finalize the PDF document
      pdfDoc.end();

      writeStream.on("finish", () => {
        console.log("PDF generated successfully");
        resolve();
      });

      writeStream.on("error", (error) => {
        console.error("Error generating PDF:", error);
        reject(new Error("Failed to generate PDF"));
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      reject(new Error("Failed to generate PDF"));
    }
  });
};
