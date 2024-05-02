import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import e from 'cors';

//to pool our environment variables from dotenv file
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb' })); 

//Routes
app.get('/',async (req,res) => {
    res.send('Hello from DALL-E !!');
})

//Start function
const startServer = async() => {

    //connect to MongoDB
    try {
      connectDB(process.env.MONGODB_URL);    
      app.listen(8080,() => console.log("Server has started on port http://localhost:8080"))
    } catch (error) {
      console.log(error);
    }
    


    
}

startServer();

// USER - samsatyavachne
// PASS - znPo1xqRzWWTZkHS