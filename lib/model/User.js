import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        required: true
    }, email: {
        type: String,
        lowercase:true,
        unique: true,
        trim: true,
        required: true
    },
    password : {
        type: String,
        trim: true,
        required: true
    },
    createdAt: {
        type: Date,
        default:Date.now
    }
})
const User = mongoose.models.User || mongoose.model("User", UserSchema)
export default User;