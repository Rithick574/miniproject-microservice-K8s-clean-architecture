import {IAddProductUseCase} from "../../domain/useCaseInterface"
import { IDependencies } from "./IDependencies";


export interface IUseCases{
    addProductUseCase:(dependencies:IDependencies)=> IAddProductUseCase;
}