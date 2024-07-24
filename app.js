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
  
  const port = process.env.PORT || 3000;

  app.listen(port, (req, res) => {
    console.log("listening");
  })

  app.get('/', async (req, res) => {
    try {
      // const data = await Carpet.find().sort({ _id: -1 });
      //  await data.save();
         const data = await Carpet.insertMany(sampleListing)
      res.status(200).json(data);
    }
    catch (err) {
      res.status(403).json({ status: false, message: "Error retrieving data from database" });
    }
  })

