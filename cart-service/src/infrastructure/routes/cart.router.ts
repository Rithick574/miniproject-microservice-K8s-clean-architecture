import { Router } from "express";


export const cartRoutes=()=>{

    const router=Router();

    router.route("/addtocart").post()

    return router;
}