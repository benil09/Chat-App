import express from "express"
import authRoutes from "./routes/auth.route.js"
import dotenv from "dotenv"
import {connectDB} from "./lib/db.js"



const app= express()
app.use(express.json())

app.use("/api/auth",authRoutes)


dotenv.config()
const port = process.env.PORT;


app.listen(port,()=>{
    console.log(`server is running on ${port}`);
    connectDB()
    
})