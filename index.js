const express = require("express")
const  cors = require("cors")
const connectToDatabase = require("./config/db")
const userRouter = require("./routes/userRouter")
require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())




app.use("/user",userRouter)


app.listen(process.env.PORT,()=>{
    console.log(`Listening on http://localhost:${process.env.PORT}`);
    connectToDatabase()
})