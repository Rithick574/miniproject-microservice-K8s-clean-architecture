import { IDependencies } from "../../application/interfaces/IDependencies";
import {addToCartController} from './addToCart'

export const controllers=(dependencies:IDependencies)=>{
    return{
        users:addToCartController(dependencies)
    }
}