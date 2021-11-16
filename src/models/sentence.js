const mongoose = require('../database')

const SentenceSchema = mongoose.Schema({
    text:{
        type: String,
        require: true
    },
    tag: {
        type: String,
        require: true
    }
})

const Sentence = mongoose.model('Sentence', SentenceSchema)

module.exports = Sentence