import { Codeforces } from "../models/codeforces.model";

const storeCodeforces = async (req, res) => {
    try {
        const {
            username,
            rating
        }
            = req.body;
        const codeforces = new Codeforces(
            {
                username,
                rating
            }
        );
        await codeforces.save();
        res.status(201).json({ message: 'Codeforces rating stored successfully', codeforces });
    }
    catch (error) {
        res.status(400).json({ message: 'Error storing codeforces rating', error: error.message });
    }
}

const getAllCodeforces = async (req, res) => {
    try {
        const data = await Codeforces.find();
        res.status(200).json({ data });
    }
    catch (error) {
        res.status(400).json({ message: 'Error getting codeforces rating', error: error.message });
    }
}

const ratingByUserName = async (req, res) => {
    try {
        const { username } = req.params;
        const data = await Code
        forces.findOne({ username
        });
        res.status(200).json({ data });
    }
    catch (error) {
        res.status(400).json({ message: 'Error getting codeforces rating', error: error.message });
    }
}

const updateRating = async (req, res) => {
    try {
        const { username } = req.params;
        const { rating } = req.body;
        const data = await Codeforces
            .findOne
            ({ username: username })
            .updateOne({ $set: { rating: rating } });
        res.status(200).json({ data });
    }
    catch (error) {
        res.status(400).json({ message: 'Error updating codeforces rating', error: error.message });
    }
}


export {
    storeCodeforces,
    getAllCodeforces,
    ratingByUserName,
    updateRating
};