import mongoose from 'mongoose'

const codechefSchema = new mongoose.Schema({
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

export const CodeChef = mongoose.model("CodeChef", codechefSchema);
