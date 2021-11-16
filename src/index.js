const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

require('./controllers/sentenceController')(app)

app.listen(process.env.PORT || 3001, ()=>{
    console.log('The server is running in port 3001')
})