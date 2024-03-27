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
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    require("dotenv").config();
    console.log(process.env.MONGO_URI, "-----");
    try {
        yield mongoose_1.default.connect(String(process.env.MONGO_URI));
        console.log("🍃🍃🍃🍃🍃🍃 Admin database connect 🍃🍃🍃🍃🍃🍃");
        console.log(`
  _____      _        _______ _     _             
 |  __ \\    | |      |__   __| |   (_)            
 | |__) |_ _| |_ _ __   | |  | |__  _ _ __   __ _ 
 |  ___/ _\` | __| '__|  | |  | '_ \\| | '_ \\ / _\` |
 | |  | (_| | |_| |     | |  | | | | | | | | (_| |
 |_|   \\__,_|\\__|_|     |_|  |_| |_|_|_| |_|\\__, |
                                            __/ |
                                           |___/ 
        `);
    }
    catch (error) {
        console.error(`🍁🍁🍁🍁🍁 Database Connection failed 🍁🍁🍁🍁🍁`);
        console.error(error.message);
        process.exit(1);
    }
});
