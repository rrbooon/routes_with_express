//Imports
const express = require('express')

//Define app
const app = express()

// Routes
app.use('/hello', (req, res)=>{
    res.send('hello world')
})

app.listen(3000)