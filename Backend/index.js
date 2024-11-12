import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/db/connection.js';
import userRoutes from './src/routes/user.route.js';
import { LeetCode } from './src/models/leetcode.model.js';

dotenv.config(
    {
        path:'./.env'

    }
); // Load environment variables

const app = express();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB

connectDB();
// // Middleware
app.use(express.json());

// Use user routes
app.use('/api/users', userRoutes);
// app.use('/api/leectode',leetcodeRoutes);
// app.use('/api/codechef',codechef);
// app.use('/api/codeforces',codeforces);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

