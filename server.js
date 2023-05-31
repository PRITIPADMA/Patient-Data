const app = require("./src/app");

// Start the server
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = server;
