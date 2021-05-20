const express = require('express')
const app = express()
require('dotenv').config()


app.listen(process.env.PORT, () => {
  console.log(`The API is running at port ${process.env.PORT}`)
})