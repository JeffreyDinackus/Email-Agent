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

const MONGODB_URI = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1";

async function main() {
    console.log(MONGODB_URI)
    await mongoose.connect(MONGODB_URI);
}

main().catch((err) => console.log(err));
// parse json data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// POST method route

app.get('/put/:id', (req, res) => {
    console.log(req.params.id);
    res.send(req.params.id);
});

// POST method route
app.post('/pull', (req, res) => {
    res.send('POST request to the homepage')

})

// POST endpoint to handle data
app.post('/put', (req, res) => {
    const data = req.body.textContents;
    console.log('Received data from client:', data);
    // You can process the data here (save to database, etc.)
    res.json({ message: 'Data received successfully' });






});




app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
// send value back to front from llm