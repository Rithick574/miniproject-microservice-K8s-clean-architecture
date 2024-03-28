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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const loginSchema_1 = require("../models/loginSchema");
const bcrypt_1 = __importDefault(require("bcrypt"));
const addUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("-----+++++------", data);
        if (!data.email || !data.password || !data.username) {
            throw new Error("Username, Email, and Password are required");
        }
        const existingUser = yield loginSchema_1.Admin.findOne({ email: data.email });
        if (existingUser) {
            throw new Error("Email already exists");
        }
        const hashedPassword = yield bcrypt_1.default.hash(data.password, 10);
        const newUser = new loginSchema_1.Admin({
            email: data.email,
            password: hashedPassword,
            username: data.username,
        });
        const savedUser = yield newUser.save();
        return savedUser;
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.addUser = addUser;
