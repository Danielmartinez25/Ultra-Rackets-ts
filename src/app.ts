import dotenv from "dotenv";
dotenv.config();
import express from "express";
import logger from "morgan";
import errors from "http-errors";
import cookieParser from "cookie-parser";
import mongoDB from "./database/config";
const app = express();
mongoDB();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

