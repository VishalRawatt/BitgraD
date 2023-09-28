const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    answers: String,
    questionId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Questions",
    },
    questionUrl: String,
    createdAt:{
        type: Date,
        default: Date.now()
    },
    user: Object
})

module.exports = mongoose.model('Answers', AnswerSchema)