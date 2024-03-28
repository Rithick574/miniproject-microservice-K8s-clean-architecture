"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const login_1 = require("./login");
const UserController_1 = require("./UserController");
const controllers = (dependencies) => {
    return {
        login: (0, login_1.loginController)(dependencies),
        addUser: (0, UserController_1.addUserController)(dependencies)
    };
};
exports.controllers = controllers;
