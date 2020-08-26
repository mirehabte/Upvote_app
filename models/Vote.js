const mongoose = require('mongoose')


const voteSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 3,
        maxlength: 250,
        required: true
    },
    description: {
        type: String,
        minlength: 1,
        maxlength: 100,
        required: true
    },
    vote: {
        type: Number,        
        required: true
    }        
});




module.exports = mongoose.model('Vote', voteSchema);