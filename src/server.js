import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config()



app.listen(process.env.PORT, () => {
	console.log(`The API is running at port ${process.env.PORT}`)
})
