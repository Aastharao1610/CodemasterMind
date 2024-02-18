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