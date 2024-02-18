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
const gptResponse = require("./gptResponse");
const ParseModel = require('./ParseModel');

app.use(cors());

app.use(cors({
    origin: true,
    credentials: true,
}));

const MONGODB_URI = "mongodb://127.0.0.1:27017/email?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1";

async function main() {
    console.log(MONGODB_URI)
    await mongoose.connect(MONGODB_URI);
}

main().catch((err) => console.log(err));
// parse json data
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// POST method route
app.get('/pull', async (req, res) => {
    try {
        const parsedData = await ParseModel.find({}).exec();
        res.json({parsedData: parsedData});

    } catch (e) {
        throw new Error(e);
    }
})

app.post('/put', async (req, res) => {
    try {
        const data = req.body.textContents;
        console.log(data);
        const firstFiveMessages = getFirstFiveMessages(data);
        const allResponses = [];
        for (const msg of firstFiveMessages){
            const aiResponse = await gptResponse(`summarize this ${msg}`);
            console.log('ai response ', aiResponse);
            allResponses.push({emailContent: aiResponse});
        }

        await ParseModel.insertMany(allResponses);
        res.json({message: 'Data received successfully'});
    } catch (e) {
        console.log(e);
    }

});

function getFirstFiveMessages(messages) {
    const firstFiveMessages = [];
    let counter = 0;
    for (let i = 0; i<messages.length;i++){
        const cur = messages[i];
        if (cur!=="tab" && cur.length > 0){
            firstFiveMessages.push(cur);
            counter++;
        }
        if (counter === 5){
            break;
        }
    }
    return firstFiveMessages;
}


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
// send value back to front from llm