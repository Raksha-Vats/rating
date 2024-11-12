import mongoose from 'mongoose'

const codechefSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    lastFetched: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

export const CodeChef = mongoose.model("CodeChef", codechefSchema);
