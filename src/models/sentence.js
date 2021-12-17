const mongoose = require('../database')

const SentenceSchema = mongoose.Schema({
    text:{
        type: String,
        require: true
    },
    tag: {
        type: String,
        require: true
    },
    favoriteCount: {
        type: Number,
        require: false,
        default: 0
    },
    favoriteUserId:[{
        type: mongoose.Schema.Types.ObjectId,
        require: false,
    }],
    information:{
        type: String,
        require: false,
        default: ''
    }
})

const Sentence = mongoose.model('Sentence', SentenceSchema)

module.exports = Sentence