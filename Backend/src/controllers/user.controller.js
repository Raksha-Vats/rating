import { User } from '../models/user.model.js';
import{CodeChef} from '../models/coddechef.model.js'

const registerUser = async (req, res) => {
    try {
        const { username, email, password, leetcode, codeforces, codechef } = req.body;

        // Create a new user instance
        const user = new User({
            username,
            email,
            password,
            leetcode: {
                username: leetcode,
                rating: 0 // Default rating
            },
            codeforces: {
                username: codeforces,
                rating: 0
            },
            codechef: {
                username: codechef,
                rating: 0
            }
        });

        // Save user to the database
        await user.save();

        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ message: 'Error registering user', error: error.message });
    }
};


const loginUser = async(req ,res)=>{
    try{
        const {email, password} = req.body;
        const userExist = await User.findOne({email}).select("+password");
        if(!userExist)
        {
            res.status(400).json({message:"user is not registered"});
        }
        const match =await userExist.matchPassword(password);
        if(!match)
        {
            res.status(401).json({message:"the password is not correct"});
        }
        res.status(200).json({
            message:"user has been logged",

        })
        
    }
    catch(e)
    {
        console.log(e);
        res.status(401).json({message:"something is wrong",e});
    }
}

const refreshUser = async(req,res) =>
{
    try{
        const {codechef,leetcode,codeforces} = req.body;
        const codechef_data_refresh=async(req ,res)=>
        {
            var d = {};
            let options = {
                'method': 'GET',
                'url': 'https://codechef-api.vercel.app/'+codechef,
                'headers': {}
            };
            const response = await fetch(options.url, {
                method: options.method,
                headers: options.headers
            });
            const data = await response.json();
            d.profile = data.profile;
            d.name = data.name;
            d.currentRating = data.currentRating;
            d.highestRating = data.highestRating;
            d.globalRank = data.globalRank;
            d.countryRank = data.countryRank;
            d.stars = data.stars;
            

        }
    }
    catch(e)
    {
        console.log(e);
    }
}

export{registerUser,loginUser}; 