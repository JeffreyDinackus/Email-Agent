
// connect

// build api for front end

// put values in DB

// query db for values

// send values to llm

// take in value from llm

// send value back to front from llm

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');

app.use(cors());

app.use(cors({
  origin: true,
  credentials: true,
}));

const MONGODB_URI = process.env.MONGO_URI;

async function main() {
  console.log(MONGODB_URI)
  await mongoose.connect(MONGODB_URI);
}
main().catch((err) => console.log(err));
// parse json data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
// send value back to front from llm