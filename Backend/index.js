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
