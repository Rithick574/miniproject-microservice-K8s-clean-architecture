import {AdminEntity,AdminLoginRequest} from "../../domain/entities"

export interface IRepositories{
    login:(data:AdminLoginRequest)=>Promise< AdminEntity | null >;
}