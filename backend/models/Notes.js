import mongoose, { Schema } from "mongoose";

const NotesSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true,
        unique : true
    },
    tags : {
        type : String,
        default : "general"
    }
});

export default mongoose.model("notes" ,UserSchema);