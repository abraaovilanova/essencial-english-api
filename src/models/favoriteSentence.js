const mongoose = require('../database')

const favoriteSentenceSchema = mongoose.Schema({
    userId: [{
        type: mongoose.Schema.Types.ObjectId,
        require: true
    }],
    sentenceId: {
        type: String,
        require: true
    },
})

const favoriteSentence = mongoose.model('Favorite', favoriteSentenceSchema)

module.exports = favoriteSentence