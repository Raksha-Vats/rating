import mongoose from 'mongoose'


const codeforcesSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    rating: {
        type: Number,
        default: 0
    },
}, { timestamps: true });

export const Codeforces = mongoose.model("Codeforces", codeforcesSchema);
