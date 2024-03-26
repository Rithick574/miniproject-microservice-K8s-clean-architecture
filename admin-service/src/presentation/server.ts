import express, { Application, NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";


const app: Application = express();
const PORT: number = Number(process.env.PORT) || 8002;

app.use(express.json());
app.use(cookieParser());

app.use(); //adminroutes

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    const errorResponse={
        errors:[{message:'Something went wrong'}]
    }
    return res.status(500).json(errorResponse)
});

app.listen(PORT,()=>{
    console.log(`connected to admin service at ${PORT}`);
    
})

export default app;
