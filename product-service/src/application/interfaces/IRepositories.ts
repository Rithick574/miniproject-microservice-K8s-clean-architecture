import { Product,ProductRequest } from "../../domain/entities";

export interface IRepositories{
    addProduct:(data:ProductRequest)=>Promise <Product | null >
}