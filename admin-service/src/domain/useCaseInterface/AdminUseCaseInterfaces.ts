import {AdminLoginRequest} from "../entities/index"
import {AdminEntity} from '../entities/AdminEntity'

export interface loginAdminUseCase {
    execute(credentials: AdminLoginRequest): Promise<AdminEntity | null>;
}