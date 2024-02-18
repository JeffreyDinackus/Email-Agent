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

const MONGODB_URI = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1";

async function main() {
    console.log(MONGODB_URI)
    await mongoose.connect(MONGODB_URI);
}

main().catch((err) => console.log(err));
// parse json data
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// POST method route

// app.get('/put/:id', async (req, res) => {
//     try {
//         console.log(req.params.id);
//         const email = "<tr class=\"zA zE x7\" jscontroller=\"ZdOxDb\" jsaction=\"Tnvr6c:RNc9jf;PG1zDd:eyrEaf;WGbBt:UL4Ddb;nVvxM:UL4Ddb;\" jsmodel=\"nXDxbd\" id=\":2o\" tabindex=\"-1\" role=\"row\" aria-labelledby=\":2p\" draggable=\"false\" jslog=\"18406; u014N:xr6bB,SYhH9d; 1:WyIjdGhyZWFkLWY6MTc5MTE5MTk1NDIzMDI4Nzc5NSIsMSxudWxsLDk4NzYwOTE0MCxbbnVsbCxbNDA1MTA0MDcsNDA1MTAzNzJdXSwxLG51bGwsMF0.; 4:W10.\"><td class=\"PF xY\"></td><td id=\":2q\" class=\"oZ-x3 xY\" style=\"\" data-tooltip=\"Select\"><div id=\":2r\" class=\"oZ-jc T-Jo J-J5-Ji T-Jo-Jp\" role=\"checkbox\" aria-labelledby=\":2p\" dir=\"ltr\" aria-checked=\"true\" tabindex=\"-1\" jslog=\"202931; u014N:cOuCgd,Kr2w4b\"><div class=\"T-Jo-auh\"></div></div></td><td class=\"apU xY\"><span id=\":2s\" class=\"aXw T-KT\" aria-label=\"Not starred\" role=\"button\" data-tooltip=\"Not starred\"><img class=\"T-KT-JX\" src=\"images/cleardot.gif\" alt=\"Not starred\"></span></td><td class=\"yX xY \" role=\"gridcell\" tabindex=\"-1\"><div id=\":2p\" class=\"afn\">selected, unread, <span class=\"bA4\"><span translate=\"no\" class=\"zF\" email=\"no-reply@spotify.com\" name=\"Spotify\" data-hovercard-id=\"no-reply@spotify.com\">Spotify</span></span>, <span class=\"bqe\" data-thread-id=\"#thread-f:1791191954230287795\" data-legacy-thread-id=\"18db97979c6f1db3\" data-legacy-last-message-id=\"18db97979c6f1db3\" data-legacy-last-non-draft-message-id=\"18db97979c6f1db3\">Last chance: 2 free months of Premium</span>, <span class=\"bq3\">6:49 PM</span>, Try Premium today. Terms apply. New to Premium only. Get all the Premium perks now. This Premium offer ends soon Want to listen to music without ads, anywhere, anytime? Now you can. For free. Try.</div><div id=\":2t\" class=\"yW\"><span class=\"bA4\"><span translate=\"no\" class=\"zF\" email=\"no-reply@spotify.com\" name=\"Spotify\" data-hovercard-id=\"no-reply@spotify.com\">Spotify</span></span></div></td><td id=\":2u\" tabindex=\"-1\" class=\"xY a4W\" role=\"gridcell\"><div class=\"xS\" role=\"link\"><div class=\"xT\"><div class=\"y6\"><span id=\":2w\" class=\"bog\"><span class=\"bqe\" data-thread-id=\"#thread-f:1791191954230287795\" data-legacy-thread-id=\"18db97979c6f1db3\" data-legacy-last-message-id=\"18db97979c6f1db3\" data-legacy-last-non-draft-message-id=\"18db97979c6f1db3\">Last chance: 2 free months of Premium</span></span></div><span id=\":2x\" class=\"y2\"><span class=\"Zt\">&nbsp;-&nbsp;</span>Try Premium today. Terms apply. New to Premium only. Get all the Premium perks now. This Premium offer ends soon Want to listen to music without ads, anywhere, anytime? Now you can. For free. Try</span></div></div></td><td class=\"byZ xY\" role=\"gridcell\" tabindex=\"-1\"></td><td class=\"yf xY \">&nbsp;</td><td class=\"xW xY \" role=\"gridcell\" tabindex=\"-1\"><span title=\"Sat, Feb 17, 2024, 6:49 PM\" id=\":2z\" aria-label=\"Sat, Feb 17, 2024, 6:49 PM\"><span class=\"bq3\">6:49 PM</span></span></td><td class=\"bq4 xY\"><ul class=\"bqY\" id=\":30\" role=\"toolbar\"><li class=\"bqX brq\" data-tooltip=\"Archive\" jsaction=\"JqEhuc\" jscontroller=\"pk1i4d\"></li><li class=\"bqX bru\" data-tooltip=\"Delete\" jsaction=\"zM6fo\" jscontroller=\"pmCKac\"></li><li class=\"bqX brr\" data-tooltip=\"Mark as read\" jsaction=\"aUd46b\" jscontroller=\"VtSflc\"></li><li class=\"bqX brv\" data-tooltip=\"Snooze\" jsaction=\"u4Fnue\" jscontroller=\"PKSrle\"></li></ul></td><td class=\"xY\"></td></tr>"
//         const aiResponse = await gptResponse(`summarize this email: ${email}`);
//         const parseModel = new ParseModel({emailContent: aiResponse});
//         await parseModel.save();
//         console.log(aiResponse);
//         res.json(aiResponse);
//     } catch (e) {
//         throw new Error(e);
//     }
//
// });

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
        const aiResponse = await gptResponse(`take the first 3 messages and separate them by \n: ${data}`);
        console.log('ai response ',aiResponse);
        const parseModel = new ParseModel({emailContent: aiResponse});
        // await parseModel.save();
        // console.log(aiResponse);
        // console.log('Received data from client:', data);
        // You can process the data here (save to database, etc.)
        res.json({message: 'Data received successfully'});
    } catch (e) {

    }

});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
// send value back to front from llm