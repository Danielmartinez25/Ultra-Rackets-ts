/*  import errorResponse from "@/helpers/errorResponse";
 */import { Request, Response } from "express"; 
export const hello = (req:Request,res:Response)=>{
    res.send("Bienvenido al servidor");
};
export const list = async({body}:Request,res:Response) => {
        try {
            const {product} = body;
            product.name = "Hola";
        } catch (error) {
            errorResponse(error,res,"List");
        }
},
export const listProduct = async ({ body }: Request, res: Response) => {
        try {

        } catch (error) {
            errorResponse(error, res, "List Product");

        }
} 