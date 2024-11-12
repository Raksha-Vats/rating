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
        trim: true  ,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    codechefusername: {
        type: String, trim: true , 
    },
    codeforcesusername: {
         type: String, trim: true , 
    },
    leetcodeusername: {
        type: String, trim: true , 
    }
}, { timestamps: true });

userSchema.methods.matchPassword=async function (password) {
    return password == this.password;
}

export const User = mongoose.model("User", userSchema);
