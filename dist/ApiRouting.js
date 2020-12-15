"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRouting = void 0;
const controllers_1 = require("./controllers");
class ApiRouting {
    static Register(app) {
        app.use(controllers_1.UserController.route, new controllers_1.UserController().router);
    }
}
exports.ApiRouting = ApiRouting;
//# sourceMappingURL=ApiRouting.js.map