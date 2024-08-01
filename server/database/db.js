import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

const DBConnection = async () => {
    //  const DB = process.env.DB;
    const MONGODB_URL = "mongodb+srv://ishimistic12:THzlyGJRBRSjk0nx@cluster0.kr7vvx6.mongodb.net/EazyShare-1?retryWrites=true&w=majority&appName=Cluster0";
    // console.log("URL", process.env.MONGODB_URL)
    // console.log("URL", MONGODB_URI)

   
    if (!MONGODB_URL) {
        console.error("MONGODB_URL is not defined in the environment variables");
        return;
    }


    try{
       await mongoose.connect(MONGODB_URL);
        console.log("Database connected successfully!");

    }catch(err){
        console.log("Error while connecting with the database: ", err.message);
    }
}

export default DBConnection;