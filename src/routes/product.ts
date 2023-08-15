import  {hello}  from "@/controllers/product";
import express from "express";
const router = express.Router();
router
.get("/hello",hello);

export = router;