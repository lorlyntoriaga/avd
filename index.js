const express = require('express')
const mongoose = require('./db')
const app = express()
const businessRoutes = require("./routes/business-routes")

app.use('/businesses', businessRoutes)

app.get('/', function (req, res) {
  res.send('Hello World5')
})
 
app.listen(3000)