const express = require("express");
const cors = require("cors");
const router = require("./router/routes");
const port = process.env.PORT || 3000;

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Application routes
app.use("/users", router);

// Listen server
app.listen(port, () => {
   console.log(`Server is running in ${port}`);
});
