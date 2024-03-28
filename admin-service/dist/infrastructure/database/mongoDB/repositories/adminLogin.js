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
exports.login = void 0;
const loginSchema_1 = require("../models/loginSchema");
const bcrypt_1 = __importDefault(require("bcrypt"));
const login = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(data, "-----+++++------");
        if (!data.email || !data.password) {
            throw new Error("Email and password are required");
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            throw new Error("Invalid email format");
        }
        if (data.password.length < 8) {
            throw new Error("Password must be at least 8 characters long");
        }
        const admin = yield loginSchema_1.Admin.findOne({
            email: data.email,
        });
        console.log("🚀 ~ file: adminLogin.ts:8 ~ adminLogin ~ admin:", admin);
        if (admin) {
            const passwordMatch = yield bcrypt_1.default.compare(data.password, admin.password);
            if (!passwordMatch) {
                throw new Error("Incorrect email or password");
            }
            else {
                return admin;
            }
        }
        else {
            throw new Error("Admin not found!");
        }
    }
    catch (error) {
        console.log("888888888888888");
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.login = login;
