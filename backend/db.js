import mongoose from "mongoose";

const mongoURL = "mongodb://localhost:27017/notebook-app?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

export default connectToMongo;
