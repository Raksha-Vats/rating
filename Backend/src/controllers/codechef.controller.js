import { CodeChef } from "../models/coddechef.model";

const storeCodechef = async (req, res) => {
    try {
        const {
            username,
            rating
        } = req.body;
        const codechef = new CodeChef(
            {
                username,
                rating
            }
        );
        await codechef.save();
        res.status(201).json({ message: 'Codechef rating stored successfully', codechef });
    }
    catch (error) {
        res.status(400).json({ message: 'Error storing codechef rating', error: error.message });
    }
}

const getAllCodechef = async (req, res) => {
    try {
        const data = await CodeChef.find();
        res.status(200).json({ data });
    }
    catch (error) {
        res.status(400).json({ message: 'Error getting codechef rating', error: error.message });
    }
}

const ratingByUserName = async (req, res) => {
    try {
        const { username } = req.params;
        const data = await Code
        Chef.findOne({ username: username });
        res.status(200).json({ data });
    }
    catch (error) {
        res.status(400).json({ message: 'Error getting codechef rating', error: error.message });
    }
}

const updateRating = async (req, res) => {
    try {
        const { username } = req.params;
        const { rating } = req.body;
        const data = await CodeChef
            .findOne
            ({ username: username })
            .updateOne({ $set: { rating: rating } });
        res.status(200).json({ data });
    }
    catch (error) {
        res.status(400).json({ message: 'Error updating codechef rating', error: error.message });
    }
}



export {
    storeCodechef,
    getAllCodechef,
    ratingByUserName,
    updateRating
    };