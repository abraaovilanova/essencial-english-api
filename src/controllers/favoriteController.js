const express = require('express')

const FavoriteSentence = require('../models/favoriteSentence')
const Sentence = require('../models/sentence')

const router = express.Router()

router.post('/:sentenceId', async (req, res) => {
    try{
            const sentence = await Sentence.findById(req.params.sentenceId)
            const { favoriteUserId } = req.body
        
            let favoriteCount = sentence.favoriteCount
            let favoriteUsersList = sentence.favoriteUserId
            

            if(!favoriteUsersList.includes(favoriteUserId)){
                favoriteUsersList = [...favoriteUsersList, favoriteUserId]
                favoriteCount = favoriteCount + 1
            }
        
            const sentenceUpdate = await Sentence.findByIdAndUpdate(req.params.sentenceId, {
                favoriteCount, favoriteUserId:favoriteUsersList
            },{ new: true })
        
            res.send({ msg: 'like done!', sentenceUpdate })
    }catch(err){
        console.log(err)
        return res.status(400).send({ error: 'favorite sentence failed' })
    }
})

module.exports = app => app.use('/fav', router)