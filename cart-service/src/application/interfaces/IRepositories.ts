import { CartEntity,AddToCartRequest } from "../../domain/entities/cartEntity";


export interface IRepositories{
    addToCart:(data:AddToCartRequest)=>Promise<CartEntity | null >
}