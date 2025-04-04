import express from "express"
import authRoutes  from "./routes/auth.route.js"
import  messageRoutes  from "./routes/message.route.js"
import dotenv from "dotenv"
import {connectDB} from "./lib/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import {app, server} from "./lib/socket.js"


dotenv.config()


app.use(cookieParser())


app.use(express.urlencoded({limit:"5mb", extended: true })); // Enables form data parsing

app.use(cors({
    origin: 'http://localhost:5173', // Allow frontend to access the API
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,  // Allow cookies and authentication headers
}));

app.use(express.json({limit: "50mb"}))
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)


const port = process.env.PORT;


server.listen(port,()=>{ 
    console.log(`server is running on ${port}`);
    connectDB()
    
})