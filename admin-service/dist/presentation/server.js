"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const adminRoutes_1 = require("../infrastructure/routes/adminRoutes");
const dependencies_1 = require("../config/dependencies");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 8002;
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/", (0, adminRoutes_1.adminRoutes)(dependencies_1.dependencies));
app.use((err, req, res, next) => {
    console.log(err);
    const errorResponse = {
        errors: [{ message: err.message }]
    };
    return res.status(500).json(errorResponse);
});
app.listen(PORT, () => {
    console.log(`connected to admin service at ${PORT}`);
});
exports.default = app;
