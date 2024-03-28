"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserController = void 0;
const addUserController = (dependencies) => {
    const { useCases: { addUserUseCase }, } = dependencies;
    if (!addUserUseCase) {
        throw new Error("addUserUseCase is not defined in dependencies");
    }
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userData = req.body;
            console.log("🚀 ~ file: UserController.ts:11 ~ returnasync ~ userData:", userData);
            const addedUser = yield addUserUseCase(dependencies).execute(userData);
            console.log("🚀 ~ file: UserController.ts:14 ~ returnasync ~ addedUser:", addedUser);
            res.status(201).json(addedUser);
        }
        catch (error) {
            next(error);
        }
    });
};
exports.addUserController = addUserController;
