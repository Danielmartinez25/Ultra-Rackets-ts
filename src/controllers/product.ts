/*  import errorResponse from "@/helpers/errorResponse";
 */import { Request, Response } from "express"; 
export = {
/*     list : async({body}:Request,res:Response) => {
        try {
            const {product} = body;
            product.name = "Hola";
        } catch (error) {
            errorResponse(error,res,"List");
        }
    },
    listProduct: async ({ body }: Request, res: Response) => {
        try {

        } catch (error) {
            errorResponse(error, res, "List Product");

        }
    } */
    hello : (req:Request,res:Response)=>{
        res.send("Bienvenido al servidor");
    }
    
}