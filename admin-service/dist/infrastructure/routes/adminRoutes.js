"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("../../presentation/controllers");
const adminRoutes = (dependencies) => {
    const { login } = (0, controllers_1.controllers)(dependencies);
    const router = (0, express_1.Router)();
    router.route('/login').post(login);
    router.route('/addproduct').post();
    return router;
};
exports.adminRoutes = adminRoutes;
