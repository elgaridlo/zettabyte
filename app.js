const express = require('express')
const dotenv = require('dotenv')
const connectionDB = require('./Section_1/config/connectionDB')
const app = express()

dotenv.config()

app.use('/', (req,res) => {
    res.json({
        status: 'berhasil'
    })
})


connectionDB()
app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})