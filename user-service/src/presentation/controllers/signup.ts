import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { hashPassword } from "../../utils/bcrypt/hashPassword";
import generateToken from "../../utils/jwt/generateToken";

export const signupController = (dependencies: IDependencies) => {
    const { useCases: { signupUserUseCase } } = dependencies;
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const credentials = req.body;
            const hashedPassword: string | null = await hashPassword(credentials.password);
            credentials.password = hashedPassword;
            const user = await signupUserUseCase(dependencies).execute(req.body);
            if (user) {
                const userId: string = user._id?.toString() ?? "";
                const token = generateToken({
                    userId: userId,
                    userEmail: user.email,
                    isAdmin: user.isAdmin,
                    isBlocked: user.isBlocked
                });

                res.cookie("auth", token, {
                    maxAge: 1000 * 60 * 60 * 24,
                    httpOnly: true
                });
                res.status(201).json({ success: true, data: user, message: "User Created" });
            } else {
                res.status(404).json({ success: false, message: "User not found" });
            }
        } catch (error) {
            next(error);
        }
    };
};
