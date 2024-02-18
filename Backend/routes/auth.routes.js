
import { Router } from 'express';
import { uplaod } from '../Middleware/multer.middleware.js';
// import { login } from '../Controller/auth.controller.js';
// import { signup } from '../Controller/auth.controller.js';
import { loginUser, logoutUser, registerUser,refreshAccessToken } from '../Controller/user.controller.js';
 import { verifyJWT } from '../Middleware/auth.middleware.js';

const router =Router();


// router.route('/signup').post(signup);
// router.route('/login').post(login);
routerroute("/register").post(
   
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

