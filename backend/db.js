import mongoose from "mongoose";

const mongoURL = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log("Connected to Mongo Successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default connectToMongo;