import {loginAdminUseCase} from "../../domain/useCaseInterface"
import { IDependencies } from "./IDependencies"

export interface IUseCases{
    loginAdminUseCase:(dependencies:IDependencies) => loginAdminUseCase;
}