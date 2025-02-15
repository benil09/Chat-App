import express from "express"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv"
import {connectDB} from "./lib/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"



const app= express()
app.use(cookieParser())

app.use("/api/message",messageRoutes)

app.use(express.urlencoded({limit:"5mb", extended: true })); // Enables form data parsing

app.use(cors({
    origin: 'http://localhost:5173', // Allow frontend to access the API
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,  // Allow cookies and authentication headers
}));

app.use(express.json({limit: "5mb"}))
app.use("/api/auth",authRoutes)


dotenv.config()
const port = process.env.PORT;


app.listen(port,()=>{
    console.log(`server is running on ${port}`);
    connectDB()
    
})