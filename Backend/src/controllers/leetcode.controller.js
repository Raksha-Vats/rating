import { LeetCode } from "../models/leetcode.model";

const storeLeetcode = async (req,res) => {
    try {
        const {
            username,
            rating
        } = req.body;
        const leetcode = new LeetCode(
            {
                username,
                rating
            }
        );
        await leetcode.save();
        res.status(201).json({ message: 'Leetcode rating stored successfully', leetcode });
    }
    catch (error) {
        res.status(400).json({ message: 'Error storing leetcode rating', error: error.message });
    }
}

const getAllLeetcode = async (req, res) => {
    try {
        const data = await LeetCode.find();
        res.status(200).json({ data });
    }
    catch (error) {
        res.status(400).json({ message: 'Error getting leetcode rating', error: error.message });
    }
}

const ratingByUserName = async (req, res) => {
    try {
        const { username } = req.params;
        const data = await LeetCode.findOne({ username: username });
        res.status(200).json({ data });
    }
    catch (error) {
        res.status(400).json({ message: 'Error getting leetcode rating', error: error.message });
    }
}

const updateRating = async (req, res) => {
    try {
        const { username } = req.params;
        const { rating } = req.body;
        const data = await LeetCode.findOneAndUpdate({ username: username, rating: rating });
        res.status(200).json({ data });
    }
    catch (error) {
        res.status(400).json({ message: 'Error updating leetcode rating', error: error.message });
    }
}

export {
    storeLeetcode,
    getAllLeetcode,
    ratingByUserName,
    updateRating
};