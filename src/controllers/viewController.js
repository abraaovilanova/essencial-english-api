const express = require('express')
const Sentence = require('../models/sentence')

const router = express.Router()

router.post('/:sentenceId', async (req, res) => {
    try{
            const sentence = await Sentence.findById(req.params.sentenceId)
            const { userId } = req.body
        
            let { userViewList } = sentence
            

            if(!userViewList.includes(userId)){
                userViewList = [...userViewList, userId]
            }else{
                const pos = userViewList.indexOf(userId)
                userViewList.splice(pos, 1)

            }
        
            const sentenceUpdate = await Sentence.findByIdAndUpdate(req.params.sentenceId, {
                userViewList
            },{ new: true })
        
            res.send({ msg: 'like done!', sentenceUpdate })
    }catch(err){
        console.log(err)
        return res.status(400).send({ error: 'favorite sentence failed' })
    }
})


module.exports = app => app.use('/view', router)