const express = require("express");
const { MongoClient } = require("mongodb");
const getAllUsers = require("../httpMethods/getAllUsers");
const getSingleUser = require("../httpMethods/getSingleUser");
const addNewUser = require("../httpMethods/addNewUser");
const updateUser = require("../httpMethods/updateUser");
const deleteUser = require("../httpMethods/deleteUser");
const router = express.Router();

// Database connection
const mongoURI =
   "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.3";

// Mongo Client
const client = new MongoClient(mongoURI);

const connect = async () => {
   try {
      await client.connect();
      console.log("Database connection successful!");
   } catch (err) {
      console.log("Can't establish database connection ", err);
   }

   // Create database and collections
   const database = client.db("user-management");
   const users = database.collection("users");

   // All users
   router.get("/", getAllUsers);

   // Single user
   router.get("/:id", getSingleUser);

   // Add new user
   router.post("/", addNewUser);

   // Update user
   router.put("/:id", updateUser);

   // Update user
   router.delete("/:id", deleteUser);
};
connect();

// Export routes
module.exports = router;
