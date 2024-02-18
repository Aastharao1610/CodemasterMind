import bcrypt from 'bcrypt'
 import  Jwt from 'jsonwebtoken';
import User from '../models/User.models.js';

const saltRounds = 10;

// Register new user
const signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Save user to the database
    const user = new User({
      username,
      password: hashedPassword,
    });
    await user.save();

    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }``
};

// Login user
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user in the database
    const user = await User.findOne({ username });

    if (user) {
      // Compare passwords
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        // Generate and send JWT token
        const token = Jwt.sign({ username: user.username }, '3b5d7f9h2k4m6p8r1t0x');

        res.json({ token });
      } else {
        res.status(401).json({ error: 'Invalid password' });
      }
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export  { signup /*, login*/ };


// import { response } from "express";
import { asyncHandler } from "../utils/asynchandler";

const Singup=asyncHandler(async(req,res)=>{
   res.status(200).json({
      message:"ok"
   })
})
// const login=asyncHandler(async(req,res)=>{
//    res.status(200).json({
//       message:"your login"
//    })
// })
export {Singup}  
import mongoose from "mongoose";
import {DB_NAME} from '../constaints.js';

const connectDB =async()=>{
   try {
    
    const connectionInstance=  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n mongoDB coneted !! DB Host :
      ${connectionInstance.connection.host}`);
       console.log(connectionInstance);
   } catch (error) {
      console.log("MONGODB connection error",error);
      process.exit(1)
   }
}

export default connectDB;
// import { Jwt } from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
   const token = req.header('Authorization');
 
   if (!token) {
     return res.status(401).json({ error: 'Unauthorized' });
   }
 
   jwt.verify(token, '3b5d7f9h2k4m6p8r1t0x', (err, user) => {
     if (err) {
       return res.status(403).json({ error: 'Forbidden' });
     }
 
     req.user = user;
     next();
   });
 };
 
 export default  authenticateToken ;
 import multer from "multer";

const storage= multer.diskStorage({
   destination:function(req,file,cb){
      cb(null)
   },
   filename:function(req,file,cb){
      const uniqueSuffix =Date.now() +'-' + Math.round(Math.random()=1E9)
      cb(null,file.originalname)
   }
})
 export const uplaod =multer(
   {
      storage,
   })

   import mongoose,{Schema} from "mongoose";
 import Jwt   from "jsonwebtoken";
import bcrypt from 'bcrypt'
// import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const userSchema = new Schema(
  {
      username: {
          type: String,
          required: true,
          unique: true,
          lowercase: true,
          trim: true, 
          index: true
      },
      email: {
          type: String,
          required: true,
          unique: true,
          lowecase: true,
          trim: true, 
      },
      fullName: {
          type: String,
          required: true,
          trim: true, 
          index: true
      },
      
      password: {
          type: String,
          required: [true, 'Password is required']
      },
     

  },
 
)

userSchema.pre("save", async function (next) {
  if(!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10)
  next()
})
userSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password, this.password)
}
userSchema.methods.generateAccessToken = function(){
  return jwt.sign(
      {
          _id: this._id,
          email: this.email,
          username: this.username,
          fullName: this.fullName
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
          expiresIn: process.env.ACCESS_TOKEN_EXPIRY
      }
  )
}
userSchema.methods.generateRefreshToken = function(){
  return jwt.sign(
      {
          _id: this._id,
          
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
          expiresIn: process.env.REFRESH_TOKEN_EXPIRY
      }
  )
}

const User = mongoose.model('User', userSchema);

export default User;

import { Router } from 'express';
// import { login } from '../Controller/auth.controller.js';
import { signup } from '../Controller/auth.controller.js';

const router =Router();


router.route('/signup').post(signup);
// router.route('/login').post(login);



export default router; // Exporting the router as default

import {v2 as cloudinary} from 'cloudinary'
import fs ,{ read } from "fs"

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret:process.env.CLOUDINARY_API_SECRET
});
const uploadOnCLoudinary = async (localFilePath) => {
   try {
     if (!localFilePath) return null;
     const response = await cloudinary.uploader.upload(localFilePath, {
       resource_type: 'auto'
     });
     console.log(response);
     console.log("file is uploaded on cloudinary");
     return response.url;
   } catch (error) {
     fs.unlink(localFilePath);
     return null;
   }
 }
 
 export { uploadOnCLoudinary };
 
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
 // app.use(express.static(""))for image
 // parse cookies
 app.use(cookieParser());
 
 import userRouter from './routes/auth.routes.js'
 app.use("/api/v1/users",userRouter)
 
 // http://localhost:3000/api/v1/users/login
 // http://localhost:3000/api/v1/users/signup
 export {app}

 // require {'dotenv'}.config({path:'./env'})

import dotenv from 'dotenv'
import { app } from './app.js';
import connectDB from './Db/index.js';

dotenv.config({
  path:'./env'
})

connectDB()
.then(()=>{
  app.listen(process.env.PORT||8000,()=>{
    console.log(`server is running at port :${process.env.PORT}`);
  })
})
.catch((err)=>{
  console.log("COnnection failed",err);
})
