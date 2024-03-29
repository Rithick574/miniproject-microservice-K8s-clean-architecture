import { Router } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";

export const cartRoutes=(dependencies:IDependencies)=>{
const {users} = controllers(dependencies)
    const router=Router();

    router.route("/addtocart").post(users)

    return router;
}