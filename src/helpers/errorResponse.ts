import { Response } from "express";

const errorResponse = (res:Response, error, method: string) =>{
    return res.status(error.status ||500).json({
        ok : false,
        msg : error.message || `Ups error en ${method}`
    });
};

export default errorResponse;