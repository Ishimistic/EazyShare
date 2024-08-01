import express from "express";
import router from "./routes/routes.js";
import cors from 'cors';
import dotenv from "dotenv";
import DBConnection from "./database/db.js";

// dotenv.config({path: './.env'});
dotenv.config();
const app = express();

app.use(cors());
app.use('/', router);
app.use(express.urlencoded({extended: true}));
app.use(express.json);

const PORT = 8090;

DBConnection();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})