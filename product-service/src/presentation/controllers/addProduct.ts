import { Response,NextFunction,Request } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { Product } from "../../domain/entities";
import { validateProductRequest } from "../../util/productValidation";

export const addProductController=(dependencies:IDependencies)=>{
    const {useCases:{addProductUseCase}} = dependencies;
    return async (req:Request,res:Response,next:NextFunction)=>{
        try {
            const data = req.body;
            const validationResult = validateProductRequest(data);
            if (!validationResult.isValid) {
                return res.status(400).json({ success: false, errors: validationResult.errors });
            }
            const product:Product | null = await addProductUseCase(dependencies).execute(data)
            res.status(201).json({ success: true, data: product });
        } catch (error:any) {
            next(error)
        }
    }
}