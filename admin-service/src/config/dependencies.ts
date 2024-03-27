import * as repositories from "../infrastructure/database/mongoDB/repositories"
import { IDependencies } from "../application/interfaces/IDependencies"
import * as usecases from "../application/useCases"

export const dependencies:IDependencies={
    repositories,
    usecases
}
