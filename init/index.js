const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const path = require("path");

require("dotenv").config({path: path.join(__dirname, "../.env")});

const MONGOURL = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  await mongoose.connect(MONGOURL);
  console.log("connected to DB");
}

main();

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6a05f2c8181a613ae9d98ba1"
  }));
  await Listing.insertMany(initData.data);
  console.log("data initialized");
};

initDB();