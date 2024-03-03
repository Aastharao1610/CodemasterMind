import bcrypt from 'bcrypt'
 import  Jwt from 'jsonwebtoken';
import User from '../models/User.models';

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


import { asyncHandler } from "../utils/asynchandler.js";
// Import User model
 import User from "../models/User.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
// Import ApiError class
import { ApiError } from "../utils/ApiError.js";
import  Jwt  from "jsonwebtoken";


const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        console.error("Error:", error);
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}

const registerUser = asyncHandler( async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res


    const {fullName, email, username, password } = req.body
    //console.log("email: ", email);

    if (
        [fullName, email, username, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists")
    }
    //console.log(req.files);


    const user = await User.create({
        fullName,
        email, 
        password,
        username: username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )

} )

const loginUser = asyncHandler(async (req, res) =>{
    // req body -> data
    // username or email
    //find the user
    //password check
    //access and referesh token
    //send cookie

    const {email, username, password} = req.body
    console.log(email);

    if (!username && !email) {
        throw new ApiError(400, "username or email is required")
    }
    
    // Here is an alternative of above code based on logic discussed in video:
    // if (!(username || email)) {
    //     throw new ApiError(400, "username or email is required")
        
    // }

    const user = await User.findOne({
        $or: [{username}, {email}]
    })

    if (!user) {
        throw new ApiError(404, "User does not exist")
    }

   const isPasswordValid = await user.isPasswordCorrect(password)

   if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials")
    }

   const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200, 
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged In Successfully"
        )
    )

})

const logoutUser = asyncHandler(async(req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"))
})
const refreshAccessToken=asyncHandler(async(req,res)=>{
const incomingrefreshToken = req.cookies.refreshToken||req.body.refreshToken

if(!incomingrefreshToken){
    throw new ApiError(401,"unauthorized reguest")

}
 try {
    const decodedToken=jwt.verify(
       incomingrefreshToken,
       secret.env.REFRESH_TOKEN_SECRET
   )
   
   const user= await User.findById(decodedToken?._id)
   if(!user){
       throw new ApiError(401,"invalid refresh Token")
   }
   if(incomingrefreshToken!== user?.refreshToken){
       throw new ApiError(401,"Refresh token is expired or used")
   
   }
   
   const options={
       httpOnly:true,
       secre:true
   }
   const {accessToken,newrefreshToken}=await generateAccessAndRefereshTokens(user._id)
   return res
   .status(200)
   .cookie("access token",accessToken)
   .cookie("refresh token",newrefreshToken)
   .json(
       new ApiResponse(
           200,
           {accessToken,refreshToken:newrefreshToken},
           "access TOken Refreshed"
       )
   )
 } catch (error) {
    throw new ApiError(401,error?.message||
        "invalid Refresh token")
 }
})
const changeCurrentPassoword=asyncHandler(async(req,res)=>{
  const {oldPassowrd,newPassword}=req.body

 const user= User.findById(req.user?._id)
 const isPasswordCorrect=await user
 .isPasswordCorrect(oldPassowrd)

 if(!isPasswordCorrect){
    throw new ApiError(404,"invlaid password")
 }
 user.password=newPassword
 await user.save({validateBeforeSave:false})
 
 return res
 .status(200)
 .json(new ApiResponse(200,{},"password changed successfully"))
})
const getCurrentUser=asyncHandler(async(req,res)=>{
    return res
    .status(200)
    .json(200,req.user,"current user fetched successfully")
})
const updateAccounHandler=asyncHandler(async(req,res)=>{
    const {fullName,email}=req.body

    if(!fullName||!email){
        throw new ApiError(400,"All fileds are required")
    }
   User.findByIdAndUpdate(
     req.user?._id,
     {
        $set:{
            fullName,
            email,

        }
     },
     {new:true}
     ).select("-password")

     return res
     .status(200)
     .json(new ApiResponse(200,User,"Account details updated successfully"))
})


export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassoword,
    getCurrentUser,
    updateAccounHandler
}
import mongoose from "mongoose";
import {DB_NAME} from '../constaints.js';

const connectDB =async()=>{
   try {
    
    const connectionInstance=  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n mongoDB coneted !! DB Host :
      ${connectionInstance.connection.host}`);
      //  console.log(connectionInstance);
   } catch (error) {
      console.log("MONGODB connection error",error);
      process.exit(1)
   }
}

export default connectDB;
import {ApiError} from  "../utils/ApiError.js";
import {asyncHandler} from  "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import User from "../models/User.models.js";


export const verifyJWT = asyncHandler(async(req, _, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        
        console.log(token);
        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if (!user) {
            // NEXT_VIDEO: discuss about frontend
            throw new ApiError(401, "Invalid Access Token")
        }
    
        req.user = user;
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
   
})
import multer from "multer";

const storage= multer.diskStorage({
   destination:function(req,file,cb){
      cb(null,"./temp")
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
 import jwt   from "jsonwebtoken";
import bcrypt from 'bcrypt'
// import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const userSchema = new Schema(
  {
      fullName: {
          type: String,
          required: true,
          unique: true,
          lowercase: true,
          trim: true, 
          index: true
      },
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
          lowercase: true,
          trim: true, 
      },      
      password: {
          type: String,
          required: [true, 'Password is required']
      },
      refreshToken: {
        type: String
    }


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
import { uplaod } from '../Middleware/multer.middleware.js';
import { loginUser, logoutUser, registerUser,refreshAccessToken } from '../Controller/user.controller.js';
 import { verifyJWT } from '../Middleware/auth.middleware.js';

const router =Router();
router.route("/register").post(
   
   uplaod.fields([
   {
     
   }
   ]),
   registerUser
   )

router.route("/login").post(loginUser)

//secured routes

router.route("/logout").post(verifyJWT, logoutUser)  //add a middleware to check if the user is logged in before logging
router.route("/refresh-token ").post(refreshAccessToken)

export default router;
class ApiError extends Error{
   constructor(
      statusCode,
      message="Something went wrong",
      errors=[],
      stack=""
   ){
      super(message)
      this.statusCode=statusCode
      this.data=null
      this.message=message
      this.success=false;
      this.errors=errors

      if(stack){
         this.stack=stack

      }else{
         Error.captureStackTrace(this,this.constructor)
      }
   }
}
export {ApiError}
class ApiResponse {
   constructor(statusCode,data,message="Success"){
      this.statusCode=statusCode
      this.data=data
      this.message=message
      this.success=statusCode<400
   }
}
export { ApiResponse }
const asyncHandler=(requestHandler)=>{
   return  (req,res,next) =>{
       Promise.resolve(requestHandler(req,res,next)).
       catch((err)=>next(err))
     }
 }
 
 
 export {asyncHandler}
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
     //file has been uplaoeded on cludinary
     console.log("file is uploaded on cloudinary",
      response.url);
      fs.unlinkSync(localFilePath)
      return response;
   } catch (error) {
     fs.unlinkSync(localFilePath);
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
app.use(cookieParser());
import userRouter from './routes/auth.routes.js'
//routes declaration
app.use("/api/v1/users",userRouter)
// http://localhost:3000/api/v1/users/register
// http://localhost:3000/api/v1/users/signup
export {app}
PORT=3000
MONGODB_URI=mongodb+srv://aastharao1610:7NmgDopEsPvA0Avf@cluster0.ly4qx2s.mongodb.net
CORS_ORIGIN=*
ACCESS_TOKEN_SECRET=sdfjhh456t7yuiuytqwertuyiughfgner345t6yutrewasdffgyt65434560987654wesdfxcvaswertyujhgfd
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=edsewrtfgrt6yuijhgtyuijkhgyujhgfdszawertyui765redswaq12345tyui9yjhnvcfdswertyjkiuytrfdsaq_Q123ERTGHY
REFRESH_TOKEN_EXPIRY=10d
CLOUDINARY_CLOUD_NAME=dzmwciqpf
CLOUDINARY_API_KEY=827376876427594
CLOUDINARY_API_SECRET=6BJOIWJctEiBgicJ_4BjuwZYRWo
export const DB_NAME='CodeMastermind'
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
  console.log("Connection failed",err);
})
{
   "name": "codemastermind",
   "version": "1.0.0",
   "description": "tutorial website",
   "main": "index.js",
   "type": "module",
   "scripts": {
     "dev": "nodemon -r dotenv/config --experimental-json-modules index.js"
   },
   "keywords": [
     "login",
     "signup",
     "codemastermind"
   ],
   "author": "Aastha rao",
   "license": "ISC",
   "devDependencies": {
     "nodemon": "^3.0.1"
   },
   "dependencies": {
     "bcrypt": "^5.1.1",
     "body-parser": "^1.20.2",
     "cloudinary": "^2.0.1",
     "cookie-parser": "^1.4.6",
     "cors": "^2.8.5",
     "dotenv": "^16.4.1",
     "express": "^4.18.2",
     "helmet": "^7.1.0",
     "jsonwebtoken": "^9.0.2",
     "mongoose": "^8.1.1",
     "mongoose-aggregate-paginate-v2": "^1.0.7",
     "multer": "^1.4.5-lts.1"
   }
 }
 