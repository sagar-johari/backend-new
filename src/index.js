// require('dotenv').config({path:'./env'});
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import dotenv from 'dotenv';
dotenv.config({
    path:'./env'
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log("Mongo db connection failed!!",err);
})





















/*(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch (error) {
        console.error("ERROR:",error);
        throw error;
    }
})()*/