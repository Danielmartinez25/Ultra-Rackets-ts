import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import mongoDB from "./database/config";
const app = express();
mongoDB();
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "http://localhost";
app.use(express.static(__dirname));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.listen(PORT,()=>{
    console.log(
        `Servidor corriendo el el puerto ${HOST}:${PORT}`
    );
});
export default app;