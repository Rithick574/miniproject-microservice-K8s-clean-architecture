import { UserEntity } from "../../domain/entities";
import { UserLoginEntity } from "../../domain/entities/userLoginEntity"

export interface IRepositories{
    signup:(data:UserEntity)=> Promise<UserEntity | null>;
    login:(data:UserLoginEntity)=>Promise<UserEntity | null>;
    findByEmail: (email: string) => Promise<UserEntity | null>;
}