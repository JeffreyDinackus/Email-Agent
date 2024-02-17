
// connect

// build api for front end

// put values in DB

// query db for values

// send values to llm

// take in value from llm

// send value back to front from llm

const config = require('./config');
const MONGODB_URI = config.MONGODB_URI;
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
main().catch((err) => console.log(err));


console.log(MONGODB_URI)


async function main() {
  await mongoose.connect(MONGODB_URI);
}
// parse json data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
// send value back to front from llm