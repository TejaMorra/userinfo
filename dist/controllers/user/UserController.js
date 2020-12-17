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
                const result = yield this.userManager.getUsers(request.body);
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
        // Products
        this.deleteProduct = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.userManager.deleteProduct(request.params);
                response.status(200).send(result);
            }
            catch (error) {
                next(error);
            }
        });
        this.updateProduct = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.userManager.updateProduct(Object.assign(Object.assign({}, request.params), request.body));
                response.status(200).send(result);
            }
            catch (error) {
                next(error);
            }
        });
        this.getProducts = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.userManager.getProducts(request.body);
                response.status(200).send(result);
            }
            catch (error) {
                next(error);
            }
        });
        this.getProduct = (req, response, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.userManager.getProduct(req.params);
                response.status(200).send(result);
            }
            catch (error) {
                next(error);
            }
        });
        this.addProduct = (req, response, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const schema = joi_1.default.object({
                    name: joi_1.default.string().required(),
                    price: joi_1.default.number().required(),
                    description: joi_1.default.string(),
                    currency: joi_1.default.string().required(),
                });
                const data = schema.validate(req.body);
                if (data.error) {
                    next(data.error);
                }
                const result = yield this.userManager.addProduct(req.body);
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
        this.router.post('/user/login', this.loginUser);
        this.router.post("/user", this.getUsers);
        this.router.get("/user/:id", this.getUser);
        this.router.post("/user/create", this.addUser);
        this.router.put("/user/:id", this.updateUser);
        this.router.delete("/user/:id", this.deleteUser);
        // Product
        this.router.post("/product", this.getProducts);
        this.router.get("/product/:id", this.getProduct);
        this.router.post("/product/create", this.addProduct);
        this.router.put("/product/:id", this.updateProduct);
        this.router.delete("/product/:id", this.deleteProduct);
    }
}
exports.UserController = UserController;
UserController.route = "/api";
//# sourceMappingURL=UserController.js.map