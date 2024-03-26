import {Router} from "express"


export const authRoutes=( dependencies: )=>{
    const router = Router()
    
    router.route('/adminlogin').post();


    return router;
}

