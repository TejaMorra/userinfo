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
exports.UserManager = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const uuid_1 = require("uuid");
const sql_manager_1 = require("../../config/sql.manager");
const query_1 = require("../../config/query");
class UserManager {
    constructor() {
        this.getUsers = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const sqlManager = new sql_manager_1.SqlManager();
                const userList = yield sqlManager.Get(query_1.users.getUsers);
                return userList;
            }
            catch (error) {
                throw error;
            }
        });
        this.getUser = (requestData) => __awaiter(this, void 0, void 0, function* () {
            try {
                const sqlManager = new sql_manager_1.SqlManager();
                return sqlManager.Get(query_1.users.getUser, { id: requestData.id });
            }
            catch (error) {
                throw error;
            }
        });
        this.updateUser = (requestData) => __awaiter(this, void 0, void 0, function* () {
            try {
                const sqlManager = new sql_manager_1.SqlManager();
                return sqlManager.Update(query_1.users.updateUser, requestData);
            }
            catch (error) {
                throw error;
            }
        });
        this.addUser = (reqData) => __awaiter(this, void 0, void 0, function* () {
            try {
                const sqlManager = new sql_manager_1.SqlManager();
                const resp = yield sqlManager.Insert(query_1.users.insertUser, reqData);
                return reqData;
            }
            catch (error) {
                throw error;
            }
        });
        this.deleteUser = (reqData) => __awaiter(this, void 0, void 0, function* () {
            try {
                const sqlManager = new sql_manager_1.SqlManager();
                const resp = yield sqlManager.Delete(query_1.users.deleteUser, reqData);
                return reqData;
            }
            catch (error) {
                throw error;
            }
        });
        this.loginUser = (reqData) => __awaiter(this, void 0, void 0, function* () {
            try {
                var token = jsonwebtoken_1.default.sign({ id: uuid_1.v4() }, 'secretKey', {
                    expiresIn: 86400 // expires in 24 hours
                });
                console.log(token);
                return { token };
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.UserManager = UserManager;
//# sourceMappingURL=UserManager.js.map