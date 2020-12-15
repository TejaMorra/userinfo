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
exports.UserController = void 0;
const express_1 = require("express");
const joi_1 = __importDefault(require("joi"));
const UserManager_1 = require("../../managers/user/UserManager");
class UserController {
    constructor() {
        this.loginUser = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.userManager.loginUser(request.params);
                response.statusCode = 200;
                response.json(result);
            }
            catch (error) {
                next(error);
            }
        });
        this.deleteUser = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.userManager.deleteUser(request.params);
                response.status(200).send(result);
            }
            catch (error) {
                next(error);
            }
        });
        this.updateUser = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.userManager.updateUser(Object.assign(Object.assign({}, request.params), request.body));
                response.status(200).send(result);
            }
            catch (error) {
                next(error);
            }
        });
        this.getUsers = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.userManager.getUsers();
                response.status(200).send(result);
            }
            catch (error) {
                next(error);
            }
        });
        this.getUser = (req, response, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.userManager.getUser(req.params);
                response.status(200).send(result);
            }
            catch (error) {
                next(error);
            }
        });
        this.addUser = (req, response, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const schema = joi_1.default.object({
                    firstName: joi_1.default.string().required(),
                    lastName: joi_1.default.string(),
                    role: joi_1.default.string().required(),
                    country: joi_1.default.string().required(),
                });
                const data = schema.validate(req.body);
                if (data.error) {
                    next(data.error);
                }
                const result = yield this.userManager.addUser(req.body);
                response.status(200).send(result);
            }
            catch (error) {
                next(error);
            }
        });
        this.router = express_1.Router();
        this.userManager = new UserManager_1.UserManager();
        this.init();
    }
    init() {
        this.router.post('/login', this.loginUser);
        this.router.get("/", this.getUsers);
        this.router.get("/:id", this.getUser);
        this.router.post("/", this.addUser);
        this.router.put("/:id", this.updateUser);
        this.router.delete("/:id", this.deleteUser);
    }
}
exports.UserController = UserController;
UserController.route = "/api/user";
//# sourceMappingURL=UserController.js.map