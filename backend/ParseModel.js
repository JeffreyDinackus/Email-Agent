const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Parse = new Schema(
    {
        emailContent: {type: String},
    })

module.exports = mongoose.model('parse', Parse);