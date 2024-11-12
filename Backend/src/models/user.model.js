import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true  
        
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true  // Removes spaces from the beginning and end of email
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    codechef: {
        username: { type: String, trim: true },
        rating: { type: Number, default: 0 }
    },
    codeforces: {
        username: { type: String, trim: true },
        rating: { type: Number, default: 0 }
    },
    leetcode: {
        username: { type: String, trim: true },
        rating: { type: Number, default: 0 }
    }
}, { timestamps: true });

userSchema.methods.matchPassword=async function (password) {
{
      return password==this.password;
}}

export const User = mongoose.model("User", userSchema);
