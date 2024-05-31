import express from "express"
import { PORT, mongoDBURL} from"./config.js"
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware for handling CORS POLICY
// 1. Allow access from all origins with Default of cors(*)
app.use(cors());
//2. Allw access from specific origins, more control
// app.use (
//     cors({
//         origin: 'http://localhost:3000',
//         method: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowHeaders:['Content-Type'],
//     })
// );

// Middleware for parsing JSON data
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request); 
    return response.status(234).send("ABC Mernstack");
}); 

app.use('/books', booksRoute);



// Connect to MongoDB
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("MongoDB connected successfully");
        app.listen(PORT, () => { 
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });