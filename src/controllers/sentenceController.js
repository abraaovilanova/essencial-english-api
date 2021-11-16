const express = require('express')

const Sentence = require('../models/sentence')

const router = express.Router()

router.get('/sentences/:tagId', async (req, res)=>{
    try{
        const tag  = req.params.tagId
        const sentences = await Sentence.find({tag})

        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 

        return res.send({ sentences })
    }catch (err){
        return res.status(400).send({ error: 'Error loading sentences'})
    }
})

router.get('/tags', async (req, res)=>{
    try{
        const tags = await Sentence.find().distinct('tag')

        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
        
        return res.send({ tags })
    }catch (err){
        return res.status(400).send({ error: 'Error loading sentences'})
    }
})

router.post('/', async (req,res)=>{
    const { sentences, tag } = req.body 

    const sentencesList = sentences.split('-')

    sentencesList.map(async (sentence) => {
        await Sentence.create({text: sentence, tag})
    })

    res.send(sentencesList)
})

router.delete('/:sentenceId', async (req,res) => {
    try{
        const sentence = await Sentence.findByIdAndRemove(req.params.sentenceId)
        return res.send({ message: "Sentence deleted"})

    }catch(err){
        return res.status(400).send({ error: 'Error deleting sentence'})
    }
})

module.exports = app => app.use('/sentence', router)