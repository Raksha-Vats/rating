import mongoose from 'mongoose'

const leetcodeSchema = new mongoose.Schema({
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

export const LeetCode = mongoose.model("LeetCode", leetcodeSchema);
