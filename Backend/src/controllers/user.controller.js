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

        
        await user.save();
        //cal store function of codechef leetcode and codeforces?
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


// const leetcodefetch =async (username) => {
    
//     //store in database codechef ?
//     const url = `https://leetcode.com/graphql/`
//     const query = `
//     {
//     user(username: "${username}") {
//     id
//     username
//     rating
//     isLocked
//     }
//     }
//     `
//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         body: JSON.stringify({ query })
//     });
//     const data = await response.json();
//     console.log(data);
//     return 0;
// }

// const codeforcesfetch = (username) => {
//     return 0;
// }

// const codecheffetch = (username) => {
//     return 0;
// }

export{registerUser,loginUser}; 