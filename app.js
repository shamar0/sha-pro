require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require("mongoose")
const Carpet = require('./schema')
const sampleListing = require('./data')

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
  }
  main().then(res => console.log("connected"));
  main().catch(err => console.log(err));
  
  app.listen(3000, (req, res) => {
    console.log("listening");
  })

  app.get('/news', async (req, res) => {
    try {
      const data = await Carpet.find().sort({ _id: -1 });
        //  const data = await Carpet.insertMany(sampleListing)
        //  await data.save();
      res.status(200).json(data);
    // res.send("hi");
    }
    catch (err) {
      res.status(403).json({ status: false, message: "Error retrieving data from database" });
    }
  })

