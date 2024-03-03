import express from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser';

const app= express();
app.use(cors({
   origin: process.env.CORS_ORIGIN,  // reflect the request origin
   credentials:true
}))
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({extended:true,limit:'50mb'}))
app.use(cookieParser());

import userRouter from './routes/auth.routes.js'
//routes declaration
app.use("/api/v1/users",userRouter)

// http://localhost:3000/api/v1/users/singup
// http://localhost:3000/api/v1/users/login
export {app}