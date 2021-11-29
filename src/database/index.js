const mongoose = require('mongoose')
require('dotenv').config()

// console.log(process.env.CONNECTIONSTRING)
// mongoose.connect(process.env.CONNECTIONSTRING,{ useNewUrlParser: true }).then(()=>{
//     console.log('Conectei a base de dados')
// })

mongoose.connect('mongodb://localhost/my-english')
mongoose.Promise = global.Promise

module.exports = mongoose