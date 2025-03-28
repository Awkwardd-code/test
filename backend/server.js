
const express = require("express");
const cors = require("cors");

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
