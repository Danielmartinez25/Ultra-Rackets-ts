import dotenv from "dotenv";
dotenv.config();
import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import mongoDB from "./database/config";
const app = express();
mongoDB();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
const PORT = process.env.PORT ;
app.listen(PORT,()=>{
    console.log(`Servidor running in port http://localhost:${PORT}`);
    
});

export default app;

