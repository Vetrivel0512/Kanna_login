const  mongoose  = require("mongoose");

const cors = require("cors")

const express = require("express")

const routes= require("./Routes/routes")

const app = express()


app.use(cors())


app.use(express.json())

const url = "mongodb://127.0.0.1:27017/Kanna"

mongoose.connect(url)

const connected = mongoose.connection

connected.on("open",()=>{
    console.log("connect=> dp")

})
app.use("/app",routes)

app.listen(3001,()=>{
    console.log("connect=> success")
})