const express = require("express");

const Schema = require("../Schema/DataSchema");

const routers = express.Router();





routers.post("/login", async (req, res) => {
  let { email, password } = req.body;

  try {
    // Find a user by email and password
    const user = await Schema.findOne({ email });

    if (user) {
      // User found, send user details in the response
      const valid_password = await Schema.findOne({ password });
      if (valid_password) {
        res.json({user, message:"allow to login"});
      } else {
        res.json("inValid password");
      }
    } else {
      // User not found
     let new_user = new Schema({ email, password } ) 
     const added = await new_user.save();
     res.json({added, message:"user add"});
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = routers;
