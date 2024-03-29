import {Request,Response,NextFunction} from 'express'
import { IDependencies } from '../../application/interfaces/IDependencies'
import { CartEntity,AddToCartRequest } from '../../domain/entities/cartEntity'


export const addToCartController=(dependencies:IDependencies)=>{
    const {useCases:{addToCartUseCase}} = dependencies;
    return async(req:Request,res:Response,next:NextFunction): Promise <void> =>{
        try {
            const {userId,email}=req.body;
            console.log("🚀 ~ file: addToCart.ts:11 ~ returnasync ~ email:", email)
            console.log("🚀 ~ file: addToCart.ts:11 ~ returnasync ~ userId:", userId)

        } catch (error:any) {
            next(error)
        }
    }
}