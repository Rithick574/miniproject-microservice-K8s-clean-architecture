import {IaddToCartUseCase} from "../../domain/useCaseInterface.ts/index"
import { IDependencies } from "./IDependencies";

export interface IUseCases{
    addToCartUseCase:(dependencies:IDependencies)=>IaddToCartUseCase;
}